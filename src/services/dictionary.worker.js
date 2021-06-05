import WebsterDict from "./data/data.json";

function getWords(term, type, n) {
  term = term.toUpperCase();
  const words = [];
  for(const key in WebsterDict) {
    if (words.length >= n) {
      break;
    }
    if (type === 'startsWith' && key.startsWith(term)) {
      words.push({ word: key, meaning: WebsterDict[key] });
    }
    if (type === 'exact' && key === term) {
      words.push({ word: key, meaning: WebsterDict[key] });
    }
  }
  return words;
}
if (typeof self != 'undefined') {
// listens for command from dictionary service
  self.addEventListener(
    "message",
    evt => {
      const { term, n, uid, type } = evt.data;
      const words = getWords(term, type, n);
      self.postMessage({ term, n, uid, words });
    },
    false
  );
}
