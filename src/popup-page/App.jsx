/* eslint-disable max-len */
import { useState, useRef } from "react";
import dictionaryService from "../services/dictionaryService";
import messagePassing from "../services/messagePassing";
import { t } from "../services/helper";

export default function App() {
  const textInput = useRef();
  const [words, setWords] = useState([]);
  const [searching, setSearching ] = useState(false);
  const labelDictionary = t("dictionary");
  const labelSearch = t("labelSearch"); // Search
  const labelSearchWords = t("labelSearchWords"); // Search words
  const labelCopyright = t("labelCopyright"); // Copyright
  const labelExtOptions = t("labelExtOptions"); // Extension Options
  const focusTextInput = () => textInput.current.focus();
  const startSearching = async () => {
    await setSearching(true);
    focusTextInput();
  };
  const onSearch = (evt) => {
    const n = 10;
    const term = evt.target.value;
    dictionaryService.getWords(term,'startsWith', n)
      .then(response => {
        if (response.length == 1) {

          setWords(response);
        } else {
          setWords(response);
        }
      });
  };
  const playSound = (word) => {
    messagePassing.sendMessage("/play", { word });
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {!searching? <th
                    className="px-6 py-4 text-left text-xs
                      font-medium text-gray-500 uppercase tracking-wider w-full"
                    scope="col"
                  >
                    {labelDictionary}
                  </th>: <th
                    scope="col"
                  >
                    <input
                      onChange={onSearch}
                      ref={textInput}
                      placeholder={labelSearchWords}
                      style={{ width: '100%' }} className="px-6 py-4 text-left text-xs
                      font-medium text-gray-500 uppercase tracking-wider w-full"
                    />
                  </th>}
                  <th
                    onClick={startSearching}
                    style={{ width: '50px', cursor: 'pointer', textDecoration: 'underline' }}
                    scope="col"
                    className="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase cursor-pointer"
                  >
                    {labelSearch}
                  </th>
                </tr>
              </thead>
            </table>
            <table className="bg-white divide-y divide-gray-200">
              {words.map((word) =>
                <tr key={word.word}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex">
                          <div>{word.word}</div>
                          <div id="audio-icon" onClick={()=>playSound(word.word)} className=""></div>
                        </div>
                        <div className="text-sm text-gray-500">{word.meaning}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </table>
            {words.length == 0 &&
            <svg className="mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.4779.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>}
            <div className="bg-gray-50" style={{ textAlign: 'center', padding: '1rem' }}>
              {labelCopyright} {'\u00A9'} <a style={{ color: 'blue' }} rel="noreferrer" target="_blank" href="https://imagetext.xyz">imagetext.xyz</a>. {" "} <a style={{ color: 'blue' }} rel="noreferrer" target="_blank" href="/option.html">{labelExtOptions}</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
