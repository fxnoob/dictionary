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
      origin: '*',
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

  //Select all language sections
  const lang_select = $('h2');
  for (let i = 0; i < lang_select.length; i++) {
    langs.push(
      lang_select
        .eq(i)
        .text()
        .trim()
    );
    langs_indexes.push(html.search(lang_select.eq(i).html()));
  }

  var lang_meanings = [];

  const languages_special_parse = {
    en: {
      parse: [
        'kanji',
        'noun',
        'verb',
        'adjective',
        'particle',
        'adverb',
        'pronoun',
        'conjunction',
        'interjection',
        'adnominal',
        'numeral',
        'number',
        'usage notes',
        'definitions'
      ],
      skip: ['chinese', 'translingual']
    }
  };

  //Go through each language section
  for (let l = 0; l < langs.length; l++) {
    if (languages_special_parse[locale] !== undefined) {
      if (languages_special_parse[locale].skip.includes(langs[l].toLowerCase())) {
        continue;
      }
    }

    const current_html =
      langs.length - 1
        ? html.substring(langs_indexes[l], langs_indexes[l + 1])
        : html.substring(langs_indexes[l], html.length);
    const current_loaded = cheerio.load(current_html);

    var sections = [];

    //Select all minor sections
    const section_selection = current_loaded('h3, h4, h5');
    for (let i = 0; i < section_selection.length; i++) {
      sections.push(section_selection.eq(i));
    }

    var actual_sections = [];

    var current_section_html = null;

    if (languages_special_parse[locale] !== undefined) {
      //If the current language has special parsing, 
      //go through each minor section, and select the wanted ones
      for (let i = 0; i < sections.length; i++) {
        if (
          languages_special_parse[locale].parse.includes(
            sections[i]
              .text()
              .trim()
              .toLowerCase()
          )
        ) {
          current_section_html = null;
          if (i == sections.length - 1) {
            current_section_html = current_html.substring(
              current_html.search(sections[i].html()) +
                sections[i].html().length,
              current_html.length
            );
          } else {
            current_section_html = current_html.substring(
              current_html.search(sections[i].html()) +
                sections[i].html().length,
              current_html.search(sections[i + 1].html())
            );
          }
          const a = cheerio.load(current_section_html);
          actual_sections.push({
            section: sections[i].text().trim(),
            text: a.text()
          });
        }
      }
    } else {
      //Else select all minor sections
      for (let i = 0; i < sections.length; i++) {
        current_section_html = null;
        if (i == sections.length - 1) {
          current_section_html = current_html.substring(
            current_html.search(sections[i].html()) + sections[i].html().length,
            current_html.length
          );
        } else {
          current_section_html = current_html.substring(
            current_html.search(sections[i].html()) + sections[i].html().length,
            current_html.search(sections[i + 1].html())
          );
        }
        const a = cheerio.load(current_section_html);
        actual_sections.push({
          section: sections[i].text().trim(),
          text: a.text()
        });
      }
    }

    if (actual_sections.length > 0) {
      lang_meanings.push({ language: langs[l], sections: actual_sections });
    }
  }
  return { query, html, lang_meanings };
}
export default lookup;
