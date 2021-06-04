import { useState, useEffect } from "react";
import Popover from "react-text-selection-popover";
import placeRightBelow from "./placeRightBelow";
import FrameComponent from "../components/IFrame";
import useDictionary from "../hooks/useDictionary";
import messagePassing from "../services/messagePassing";
import db from "../services/dbService";

const filterWord = (word) => {
  let w = word.trim().toUpperCase();
  if (w[w.length - 1 ] == "S") {
    w = w.slice(0, -1);
  }
  if (w.endsWith("ING")) {
    w = w.slice(0, -3);
  }
  return w;
};

export default function App() {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState("");
  const [popupSkinColor, setPopupSkinColor] = useState();
  // eslint-disable-next-line no-unused-vars
  const [word, setWord, error, loading] = useDictionary(content, 1);
  const onTextSelect = async () => {
    const { popup } = await db.get("popup");
    if (popup) {
      const text = window.getSelection().toString();
      setContent(filterWord(text));
      setOpen(true);
    }
  };
  const init = async () => {
    const { popupSkinColor } = await db.get("popupSkinColor");
    setPopupSkinColor(popupSkinColor);
    db.onChange("popupSkinColor", (oldColor, newColor) => {
      setPopupSkinColor(newColor);
    });
  };
  useEffect(() => {
    init().catch(() => {});
  }, []);
  const playSound = () => {
    messagePassing.sendMessage("/play", { word: word.word });
  };
  return (
    <Popover
      placementStrategy={placeRightBelow}
      isOpen={open}
      onTextSelect={onTextSelect}
      onTextUnselect={() => setOpen(false)}
    >
      <FrameComponent
        className="default-iframe"
        style={{ border: "none", zIndex: 99989898, background: popupSkinColor,
          "WebkitBoxShadow":"0px 0px 3px 0px rgba(0,0,0,0.75)",
          "MozBoxShadow":"0px 0px 3px 0px rgba(0,0,0,0.75)",
          "boxShadow":"0px 0px 3px 0px rgba(0,0,0,0.75)"
        }}
      >
        <div className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              {loading && "Loading..."}
              {!loading && !error && (
                word ? <>
                  <div className="flex text-sm font-medium text-gray-900">
                    {word.word}
                    <div id="audio-icon" onClick={playSound} className=""></div>
                  </div>
                  <div className="text-sm text-gray-700"
                    style={{ marginTop: '0.5rem' }}>{word.meaning}</div>
                  <div className="text-sm text-gray-500" style={{ marginTop: '0.4rem' }}>
                    [ powered by {" "}
                    <a rel="noreferrer"
                      href="https://imagetext.xyz" target="_blank">imagetext.xyz</a> {" "}]
                  </div>
                </>: "No word Found!"
              )
              }
            </div>
          </div>
        </div>
      </FrameComponent>
    </Popover>
  );
}