# Dictionary - Oxford, Webster and Wikipedia

## Install from [Chrome Web Store](https://chrome.google.com/webstore/detail/pbknajakomimhnnaiddkbddboifjolbf)


### Dictionary for multiple languages. 


### Supported Languages: 
Abkhaz,Acehnese,Adyghe,Afrikaans,Akan,Albanian,Alemannic,Amharic,Arabic,Aragonese,Aramaic,Armenian,Aromanian,Assamese,Asturian,Atikamekw,Avar,Awadhi,Aymara,Azerbaijani,Balinese,Bambara,Banjar,Banyumasan,Bashkir,Basque,Bavarian,Belarusian,Belarusian (Taraškievica),Bengali,Bihari (Bhojpuri),Bishnupriya Manipuri,Bislama,Bosnian,Breton,Buginese,Bulgarian,Burmese,Buryat,Cantonese,Catalan,Cebuano,Central Bikol,Chamorro,Chechen,Cherokee,Chewa,Cheyenne,Chinese,Chuvash,Classical Chinese,Cornish,Corsican,Cree,Crimean Tatar,Croatian,Czech,Danish,Dhivehi,Dinka,Doteli,Dutch,Dutch Low Saxon,Dzongkha,Eastern Min/Min Dong,Eastern Punjabi,Egyptian Arabic,Emilian-Romagnol,English,Erzya,Esperanto,Estonian,Ewe,Extremaduran,Faroese,Fiji Hindi,Fijian,Finnish,Franco-Provençal/Arpitan,French,Friulian,Fula,Gagauz,Galician,Gan Chinese,Georgian,German,Gilaki,Gorontalo,Gothic,Greek,Greenlandic,Guarani,Guianan Creole,Gujarati,Haitian Creole,Hakka,Hausa,Hawaiian,Hebrew,Hill Mari,Hindi,Hungarian,Icelandic,Ido,Igbo,Ilokano,Inari Sami,Indonesian,Ingush,Interlingua,Interlingue,Inuktitut,Inupiaq,Iran Azerbaijani,Irish,Italian,Jamaican Patois,Japanese,Javanese,Judaeo-Spanish/Ladino,Kabardian,Kabiye,Kabyle,Kalmyk,Kannada,Kapampangan,Karachay-Balkar,Karakalpak,Kashmiri,Kashubian,Kazakh,Khmer,Kikuyu,Kinyarwanda,Kirundi,Komi,Komi-Permyak,Kongo,Konkani,Korean,Kotava,Kurdish (Kurmanji),Kurdish (Sorani),Kyrgyz,Ladin,Lak,Lao,Latgalian,Latin,Latvian,Lezgian,Ligurian,Limburgish,Lingala,Lingua Franca Nova,Lithuanian,Livvi-Karelian,Lojban,Lombard,Low German,Lower Sorbian,Luganda,Luxembourgish,Macedonian,Madurese,Maithili,Malagasy,Malay,Malayalam,Maltese,Manx,Marathi,Mazanderani,Meadow Mari,Minangkabau,Mingrelian,Mirandese,Moksha,Mon,Mongolian,Moroccan Arabic,Māori,N'Ko,Nahuatl,Nauruan,Navajo,Neapolitan,Nepali,Newar/Nepal Bhasa,Nias,Norfolk,Norman,North Frisian,Northern Sami,Northern Sotho,Norwegian (Bokmål),Norwegian (Nynorsk),Novial,Occitan,Odia,Old Church Slavonic,Old English/Anglo-Saxon,Oromo,Ossetian,Palatine German,Pali,Pangasinan,Papiamento,Pashto,Pennsylvania German,Persian,Picard,Piedmontese,Polish,Pontic Greek,Portuguese,Quechua,Ripuarian,Romanian,Romansh,Russian,Rusyn,Sakizaya,Samoan,Samogitian,Sango,Sanskrit,Santali,Saraiki,Sardinian,Saterland Frisian,Scots,Scottish Gaelic,Serbian,Serbo-Croatian,Shan,Shona,Sicilian,Silesian,Simple English,Sindhi,Sinhalese,Slovak,Slovene,Somali,Sotho,Southern Min/Min Nan,Spanish,Sranan Tongo,Sundanese,Swahili,Swazi,Swedish,Tagalog,Tahitian,Tajik,Tamil,Tarantino,Tatar,Telugu,Tetum,Thai,Tibetan,Tigrinya,Tok Pisin,Tongan,Tsonga,Tswana,Tulu,Tumbuka,Turkish,Turkmen,Tuvan,Twi,Udmurt,Ukrainian,Upper Sorbian,Urdu,Uyghur,Uzbek,Venda,Venetian,Veps,Vietnamese,Vlax Romani,Volapük,Võro,Walloon,Waray,Welsh,West Flemish,West Frisian,Western Armenian,Western Punjabi,Wolof,Wu,Xhosa,Yakut/Sakha,Yiddish,Yoruba,Zamboanga Chavacano,Zazaki,Zeelandic,Zhuang,Zulu

## Prerequisites

- yarn v1.17.3
- node v12.3.1

## Pre-configurations

> * Replace `Constants.appConfig.key` in `constants.js` with your chrome extension's key obtained from chrome developer extension dashboard.
> * Set `GECKO_ID` in `constants.js` and Set other configurations in `constants.js` when required.
> * Set extension next version in `package.json` version before building.
> * Generate locale for key `appName` and `appDescription` for extension's name and description. See `yarn generate:locale`.

## Basic Usage

### Locale generate/Delete

Generate locale
````
yarn generate:locale
````

Delete locale
````
yarn delete:locale
````

### Build

#### For Local Development

#### For Chromium Development Build

```
yarn
yarn dev:chromium
```

#### For Firefox Development Build

```
yarn
yarn dev:firefox
```

#### For Production Release

> Note: Before creating production build. Set version in package.json's version. that will be extension's build version. 

#### For Chromium Build

```
yarn
yarn build:chromium
```

#### For Firefox Build

```
yarn
yarn build:firefox
```



## features:

> 1. Support for ESNEXT ( with Babel and polyfill).
> 2. Popup page with reactjs and material ui framework.
> 3. Content script with reactjs and material ui framework.
> 5. Option Page with reactjs and material ui framework + tailwind css.
> 5. Bundling (webpack).
> 6. Cross-browser configurations.
> 7. Generate multiple-language (Auto-translations) locales from english locales. See `yarn generate:locale` and `yarn delete:locale`. 
> 8. Some (useful) services e.g. DbService, messagePassing, chromeService and helper functions(helpers).
> 9. Some (useful) react components e.g. IFrame.js (To mount react mui component in iframe in content script).
> 10. Locale translation using unofficial google translate API (Free version).

## directory structure

> - `src/` is root directory for a chrome extension. it includes `manifest.json` file and other static stuff.

> - `src/background.js` is main background js file for the chrome extension.

> - `src/components` is the directory which includes react js components.

> - `src/popup-page` is the directory which includes react js setup for popup page.

> - `src/option-page` is the directory which includes react js setup for option pages.

> - `src/content-scripts` is the directory which includes react js setup for content script.

> - `src/services` is the directory for services that can be written in es6,es7 or es8...

## How to extend ?

> - Write extension's background scripts code in `src/background.js`

> - Write extension's react components in `src/components/` directory.

> - Write extension's popup page codes in `src/popup-page/` directory.

> - Write extension's option page codes in `src/option-page` directory.

> - Write extension's content scripts codes in `src/content-scripts` directory.

> - Write extension's services codes in `src/services` directory.
