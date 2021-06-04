import messagePassing from "./messagePassing";
class Dictionary {
  getWords(term, n) {
    return new Promise(resolve => {
      messagePassing.sendMessage(
        "/get_words",
        { term, n },
        words => {
          resolve(words);
        }
      );
    });
  }
}
const dictionaryService = new Dictionary();
export default dictionaryService;
