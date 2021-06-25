const URL = require('url');
const flat = require('flat');
const { get: getProp } = require('lodash');
const cheerio = require('cheerio');

async function lookup (query, locale = 'en') {
  // Example query
  // https://en.wiktionary.org/w/api.php?action=query&prop=extracts&titles=pomology&format=json
  const url = URL.format({
    protocol: 'https',
    hostname: `${locale}.wiktionary.org`,
    pathname: '/w/api.php',
    query: {
      action: 'query',
      format: 'json',
      prop: 'extracts',
      origin: "*",
      titles: query.toLowerCase()
    }
  });
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });
  const body = await response.json();
  const key = Object.keys(flat(body)).find(key => key.endsWith('.extract'));
  if (!key) return null; // 404 word not found
  const html = getProp(body, key);
  const $ = cheerio.load(html);

  var langs = [];
  var langs_indexes = [];

  //The chinese section stores all information in a single section called 'definitions',
  //which makes it unmanagable to include. Instead of skipping it entirely we could also
  //show only the first x characters from the chinese 'definitions' section
  const skip_languages = ['chinese']

  //Select all language sections
  const lang_select = $('h2');
  for (let i = 0; i < lang_select.length; i++) {
    if (!skip_languages.includes(lang_select.eq(i).text().trim().toLowerCase())) {
      langs.push(lang_select.eq(i).text().trim());
      langs_indexes.push(html.search(lang_select.eq(i).html())); 
    }
  }

  //Go through each language section
  var text = ""
  for (let l = 0; l < langs.length; l++)
  {
    var lang_text = ""

    const current_html = langs.length - 1 ? html.substring(langs_indexes[l],langs_indexes[l + 1]) : html.substring(langs_indexes[l],html.length);
    const current_loaded = cheerio.load(current_html);

    var sections = [];

    //Select all minor sections
    const section_selection = current_loaded('h3, h4, h5');
    for (let i = 0; i < section_selection.length; i++) {
      sections.push(section_selection.eq(i));
    }
  
    const wanted_sections = ['kanji', 'noun', 'verb', 'adjective', 'particle', 'adverb', 'pronoun', 'conjunction', 'interjection', 'adnominal', 'numeral', 'number', 'usage notes', 'definitions'];
    //Go through each minor section, and select the wanted ones
    for (let i = 0; i < sections.length; i++) {
      if (wanted_sections.includes(sections[i].text().trim().toLowerCase())) {
        var current_section_html = null
        if (i == sections.length - 1) {
          current_section_html = current_html.substring(current_html.search(sections[i].html()), current_html.length);
        }
        else  {
          current_section_html = current_html.substring(current_html.search(sections[i].html()), current_html.search(sections[i + 1].html()));
        }
        const a = cheerio.load(current_section_html);
        lang_text += '--- ' + a.text().trim() + '\n';
      }
    }
    if (lang_text.length != 0)
    {
      text += l == 0 ? langs[l] + ':\n' : '\n' + langs[l] + ':\n';
      text += lang_text;
    }
  }

  return { query, html, text };
}
export default lookup;
