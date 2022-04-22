const Dictionary = {};

function getWords({ term, type, n }) {
  term = term.toUpperCase();
  const words = [];
  for (const key in Dictionary) {
    if (words.length >= n) {
      break;
    }
    if (type === "startsWith" && key.startsWith(term)) {
      // eslint-disable-next-line max-len
      words.push({
        word: key,
        meanings: [
          {
            language: "English",
            sections: [{ section: "meaning", text: Dictionary[key] }],
          },
        ],
      });
    }
    if (type === "exact" && key === term) {
      // eslint-disable-next-line max-len
      words.push({
        word: key,
        meanings: [
          {
            language: "English",
            sections: [{ section: "meaning", text: Dictionary[key] }],
          },
        ],
      });
    }
    if (words.length > 0) {
      // eslint-disable-next-line no-console
      console.log({ words });
    }
  }
  return words;
}
export default getWords;
