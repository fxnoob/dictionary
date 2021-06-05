const jsonfile = require("jsonfile");
const path = require("path");
const mainDictionary = jsonfile.readFileSync(path.join(__dirname, "./dictionary.json"));
const oxfordDict = jsonfile.readFileSync(path.join(__dirname, "./oxford_en.json"));
const gredEd = jsonfile.readFileSync(path.join(__dirname, "./gre_ad.json"));

for (const obj of oxfordDict) {
  mainDictionary[obj.word] = obj.definition;
}

for (const obj of gredEd) {
  mainDictionary[obj.word.toUpperCase()] = obj.meaning;
}

jsonfile.writeFileSync(path.join(__dirname, "./data.json"), mainDictionary, { flag: "w" });