import Dictionary from './data/loader';

function getWords({ term, type, n }) {
  term = term.toUpperCase();
  const words = [];
  for(const key in Dictionary) {
    if (words.length >= n) {
      break;
    }
    if (type === 'startsWith' && key.startsWith(term)) {
      // eslint-disable-next-line max-len
      words.push({ word: key, meanings: [{ language: 'English', sections: [{ section: 'meaning', text: Dictionary[key] }] }] });
    }
    if (type === 'exact' && key === term) {
      // eslint-disable-next-line max-len
      words.push({ word: key, meanings: [{ language: 'English', sections: [{ section: 'meaning', text: Dictionary[key] }] }] });
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
