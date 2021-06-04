import dictionaryJson from "./dictionary.json";
function getWords(term, n) {
  term = term.toUpperCase();
  const words = [];
  for(const key in dictionaryJson) {
    if (words.length >= n) {
      break;
    }
    if (key.startsWith(term)) {
      words.push({ word: key, meaning: dictionaryJson[key] });
    }
  }
  return words;
}
if (typeof self != 'undefined') {
// listens for command from dictionary service
  self.addEventListener(
    "message",
    evt => {
      const { term, n, uid } = evt.data;
      const words = getWords(term, n);
      self.postMessage({ term, n, uid, words });
    },
    false
  );
}
