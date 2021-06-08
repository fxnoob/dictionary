/**
 * I18n get translations
 */
const t = key => {
  return chrome.i18n.getMessage(key);
};
/**
 * map wikipedia lang id to chrome tts lang ids
 * e.g. {wikipedia_lang_id: chrome_lang_id}
 * */
const languageMap = {
  af: 'af-ZA',
  ar: 'ar-XA',
  bn: 'bn-IN',
  bg: 'bg-BG',
  ca: 'ca-ES',
  cs: 'cs-CZ',
  da: 'da-DK',
  nl: 'nl-NL',
  'nds-nl': 'nl-NL',
  en: 'en-AU',
  fi: 'fi-FI',
  fr: 'fr-CA',
  de: 'de-DE',
  el: 'el-GR',
  gu: 'gu-IN',
  hi: 'hi-IN',
  hu: 'hu-HU',
  is: 'is-IS',
  id: 'id-ID',
  it: 'it-IT',
  ja: 'ja-JP',
  kn: 'kn-IN',
  ko: 'ko-KR',
  lv: 'lv-LV',
  ms: 'ml-IN',
  ml: 'ml-IN',
  no: 'nb-NO',
  nn: 'nb-NO',
  pl: 'pl-PL',
  pt: 'pt-BR',
  ro: 'ro-RO',
  ru: 'ru-RU',
  sr: 'sr-RS',
  sk: 'sk-SK',
  es: 'es-ES',
  sv: 'sv-SE',
  ta: 'ta-IN',
  te: 'te-IN',
  th: 'th-TH',
  tr: 'tr-TR',
  uk: 'uk-UA',
  vi: 'vi-VN'
};

export {
  t,
  languageMap
};
