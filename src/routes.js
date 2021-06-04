/* eslint-disable no-unused-vars */
import guid from "./services/guid";
import DictionaryWorker from "./services/dictionary.worker";
import messagePassing from "./services/messagePassing";
/**
 *
 * messagePassing object is the Messaging Passing Class Object
 * which contains methods suitable for message passing apis.
 *
 * */
const dictionaryWorker = new DictionaryWorker();
const Routes = async () => {
  messagePassing.setOptions({ dictionaryWorker });
  messagePassing.on("/echo", async (req, res, actions) => {
    // eslint-disable-next-line no-console
    console.log("message logged");
    res({ response: "hello world" });
  });
  /** Get dictionary words from dictionary worker */
  messagePassing.on("/get_words", async (req, res, options) => {
    const { term, n } = req;
    // eslint-disable-next-line no-console
    const { dictionaryWorker } = options;
    const uid = guid.generateGuid();
    dictionaryWorker.postMessage({ term, n, uid });
    dictionaryWorker.addEventListener("message", workerData => {
      const { words, uid: resUid } = workerData.data;
      if (uid == resUid) {
        res(words);
      }
    });
  });
};
export default Routes;
