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
  const text = cheerio.load(html).text()
    .trim() // remove extra whitespace and newlines
    .replace('English\n', '')
    .replace('Noun\n', '')
    .replace('Etymology\n', 'Etymology: ')
    .replace('Translation\n', 'Translation: ')
    .replace('Anagrams\n', 'Anagrams: ')
    .replace(/\n+/gm, '\n') // duplicate newlines
    .replace(/\n/gm, '; ');
  return { query, html, text };
}
export default lookup;