import messagePassing from "./messagePassing";
class Dictionary {
  getWords(term,type, n) {
    return new Promise(resolve => {
      messagePassing.sendMessage(
        "/get_words",
        { term,type, n },
        words => {
          resolve(words);
        }
      );
    });
  }
}
const dictionaryService = new Dictionary();
export default dictionaryService;
