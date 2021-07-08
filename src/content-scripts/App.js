import { useState, useEffect } from "react";
import Popover from "react-text-selection-popover";
import placeRightBelow from "./placeRightBelow";
import FrameComponent from "../components/IFrame";
import useDictionary from "../hooks/useDictionary";
import messagePassing from "../services/messagePassing";
import db from "../services/dbService";
import Loader from "../components/Loader";
import { t } from "../services/helper";

export default function App() {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState("");
  const [popupSkinColor, setPopupSkinColor] = useState();
  const [word, setWord, error, loading] = useDictionary(content, 1);
  const onTextSelect = async () => {
    const { popup } = await db.get("popup");
    if (popup) {
      const text = window.getSelection().toString().trim();
      const badFormat = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      if (!badFormat.test(text)) {
        setContent(text);
        setOpen(true);
      } else {
        setContent("");
        setOpen(false);
        setWord(null);
      }
    }
  };
  const onTextUnselect = () => {
    setOpen(false);
    setWord({});
  };
  const init = async () => {
    const { popupSkinColor } = await db.get("popupSkinColor");
    setPopupSkinColor(popupSkinColor);
    db.onChange("popupSkinColor", (oldColor, newColor) => {
      setPopupSkinColor(newColor);
    });
    /** Check for content script mount acknowledgement from background script */
    messagePassing.on("/cs_mounted", async (req, res) => {
      res({ mounted: true });
    });
  };
  useEffect(() => {
    init().catch(() => {});
  }, []);
  const playSound = () => {
    messagePassing.sendMessage("/play", { word: word.word });
  };
  // eslint-disable-next-line no-console
  return (
    <Popover
      placementStrategy={placeRightBelow}
      isOpen={open}
      onTextSelect={onTextSelect}
      onTextUnselect={onTextUnselect}
    >
      <FrameComponent
        style={{
          zIndex: 99989898,
          background: popupSkinColor,
          "WebkitBoxShadow":"0px 0px 3px 0px rgba(0,0,0,0.75)",
          "MozBoxShadow":"0px 0px 3px 0px rgba(0,0,0,0.75)",
          boxShadow: "0 0 20px rgb(0 0 0 / 50%)",
          border: "1px solid #999",
          borderRadius: '4px',
        }}
      >
        <div className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              {loading && <Loader style={{ width: '30px' }}/>}
              {!loading && !error && (
                word ? <>
                  <div className="flex text-sm font-medium text-gray-900"
                    style={{ lineHeight: '1.4' }}>
                    <div style={{ fontSize: '14px',
                      fontWeight: 'bolder', fontFamily: 'arial, sans-serif' }}>
                      {word.word}
                    </div>
                    <div id="audio-icon" onClick={playSound} className=""></div>
                  </div>
                  {word.meaning && word.meanings.map(object => 
                    <div className="text-sm text-gray-700" key={object.language} 
                      style={{ marginTop: '0.5rem', fontFamily: 'arial, sans-serif' }}>
                      <span><b>{object.language}</b></span>
                      {object.sections.map(section =>
                        <div key={section.section + section.text}>
                          <span><i>{section.section + ' · '}</i></span>
                          <span>{section.text}</span>
                        </div>)
                      }
                    </div>)
                  }
                  <div className="text-sm text-gray-500" style={{ marginTop: '0.4rem' }}>
                    [ powered by {" "}
                    <a rel="noreferrer" style={{ fontFamily: 'arial, sans-serif' }}
                      href="https://imagetext.xyz" target="_blank">imagetext.xyz</a> {" "}]
                  </div>
                </>: <div style={{ fontFamily: 'arial, sans-serif' }}>{t("noDefFound")}</div>
              )
              }
            </div>
          </div>
        </div>
      </FrameComponent>
    </Popover>
  );
}
