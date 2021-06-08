import Dictionary from './data/loader';

function getWords({ term, type, n }) {
  term = term.toUpperCase();
  const words = [];
  for(const key in Dictionary) {
    if (words.length >= n) {
      break;
    }
    if (type === 'startsWith' && key.startsWith(term)) {
      words.push({ word: key, meaning: Dictionary[key] });
    }
    if (type === 'exact' && key === term) {
      words.push({ word: key, meaning: Dictionary[key] });
    }
  }
  return words;
}
if (typeof self != 'undefined') {
  self.addEventListener(
    "message",
    evt => {
      const { term, n, uid, type } = evt.data;
      const words = getWords({ term, type, n });
      self.postMessage({ term, n, uid, words });
    },
    false
  );
}
