/* eslint-disable no-unused-vars */
import guid from "./services/guid";
import DictionaryWorker from "./services/dictionary.worker";
import messagePassing from "./services/messagePassing";
import wikiService from "./services/wikiService";
import db from "./services/dbService";
import { languageMap } from "./services/helper";

const speechSynthesis = require('speech-synthesis');

/**
 *
 * messagePassing object is the Messaging Passing Class Object
 * which contains methods suitable for message passing apis.
 *
 * */
const dictionaryWorker = new DictionaryWorker();
const Routes = async () => {
  messagePassing.setOptions({ dictionaryWorker });
  /** Get dictionary words from dictionary worker */
  messagePassing.on("/get_words", async (req, res, options) => {
    const { term, type, n, id } = req;
    // eslint-disable-next-line no-console
    const { dictionaryWorker } = options;
    const uid = guid.generateGuid();
    dictionaryWorker.postMessage({ term,type, n, uid });
    dictionaryWorker.addEventListener("message", async workerData => {
      const { words, uid: resUid } = workerData.data;
      if (uid == resUid) {
        let dicts = words || [];
        if (dicts.length == 0) {
          const { wikitionaryAllowed, langId } = await db.get("wikitionaryAllowed", "langId");
          if (wikitionaryAllowed) {
            const wikiWord = await wikiService(term, langId);
            if (wikiWord) {
              dicts = [{ word: term, meaning: wikiWord.text, meanings: wikiWord.lang_meanings }];
            }
          }
        }
        res({ dicts, resId: id });
      }
    });
  });
  /** play word */
  messagePassing.on("/play", async (req, res, options) => {
    const { word } = req;
    const { langId } = await db.get("langId");
    try {
      // chrome.tts.speak(word, { lang: langId || 'en-US' });
      speechSynthesis(word, languageMap[langId] || 'en-US');
    } catch (e) {}
  });
};
export default Routes;
