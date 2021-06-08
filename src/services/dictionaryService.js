import guid from "../services/guid";
import messagePassing from "./messagePassing";
class Dictionary {
  getWords(term,type, n) {
    return new Promise(resolve => {
      const id = guid.generateGuid();
      messagePassing.sendMessage(
        "/get_words",
        { term,type, n, id },
        ({ dicts, resId }) => {
          if (id === resId) {
            resolve(dicts);
          }
        }
      );
    });
  }
}
const dictionaryService = new Dictionary();
export default dictionaryService;
