export default function LanguageOptions(props) {
  // eslint-disable-next-line react/prop-types
  const { value, onChange, ...rest } = props;
  return (
    <select onChange={onChange} value={value} {...rest}>
      <option key="ab" value="ab">Abkhaz</option>
      <option key="ace" value="ace">Acehnese</option>
      <option key="ady" value="ady">Adyghe</option>
      <option key="af" value="af">Afrikaans</option>
      <option key="ak" value="ak">Akan</option>
      <option key="sq" value="sq">Albanian</option>
      <option key="als" value="als">Alemannic</option>
      <option key="am" value="am">Amharic</option>
      <option key="ar" value="ar">Arabic</option>
      <option key="an" value="an">Aragonese</option>
      <option key="arc" value="arc">Aramaic</option>
      <option key="hy" value="hy">Armenian</option>
      <option key="roa-rup" value="roa-rup">Aromanian</option>
      <option key="as" value="as">Assamese</option>
      <option key="ast" value="ast">Asturian</option>
      <option key="atj" value="atj">Atikamekw</option>
      <option key="av" value="av">Avar</option>
      <option key="awa" value="awa">Awadhi</option>
      <option key="ay" value="ay">Aymara</option>
      <option key="az" value="az">Azerbaijani</option>
      <option key="ban" value="ban">Balinese</option>
      <option key="bm" value="bm">Bambara</option>
      <option key="bjn" value="bjn">Banjar</option>
      <option key="map-bms" value="map-bms">Banyumasan</option>
      <option key="ba" value="ba">Bashkir</option>
      <option key="eu" value="eu">Basque</option>
      <option key="bar" value="bar">Bavarian</option>
      <option key="be" value="be">Belarusian</option>
      <option key="be-tarask" value="be-tarask">Belarusian (Taraškievica)</option>
      <option key="bn" value="bn">Bengali</option>
      <option key="bh" value="bh">Bihari (Bhojpuri)</option>
      <option key="bpy" value="bpy">Bishnupriya Manipuri</option>
      <option key="bi" value="bi">Bislama</option>
      <option key="bs" value="bs">Bosnian</option>
      <option key="br" value="br">Breton</option>
      <option key="bug" value="bug">Buginese</option>
      <option key="bg" value="bg">Bulgarian</option>
      <option key="my" value="my">Burmese</option>
      <option key="bxr" value="bxr">Buryat</option>
      <option key="zh-yue" value="zh-yue">Cantonese</option>
      <option key="ca" value="ca">Catalan</option>
      <option key="ceb" value="ceb">Cebuano</option>
      <option key="bcl" value="bcl">Central Bikol</option>
      <option key="ch" value="ch">Chamorro</option>
      <option key="ce" value="ce">Chechen</option>
      <option key="chr" value="chr">Cherokee</option>
      <option key="ny" value="ny">Chewa</option>
      <option key="chy" value="chy">Cheyenne</option>
      <option key="zh" value="zh">Chinese</option>
      <option key="cv" value="cv">Chuvash</option>
      <option key="zh-classical" value="zh-classical">Classical Chinese</option>
      <option key="kw" value="kw">Cornish</option>
      <option key="co" value="co">Corsican</option>
      <option key="cr" value="cr">Cree</option>
      <option key="crh" value="crh">Crimean Tatar</option>
      <option key="hr" value="hr">Croatian</option>
      <option key="cs" value="cs">Czech</option>
      <option key="da" value="da">Danish</option>
      <option key="dv" value="dv">Dhivehi</option>
      <option key="din" value="din">Dinka</option>
      <option key="dty" value="dty">Doteli</option>
      <option key="nl" value="nl">Dutch</option>
      <option key="nds-nl" value="nds-nl">Dutch Low Saxon</option>
      <option key="dz" value="dz">Dzongkha</option>
      <option key="cdo" value="cdo">Eastern Min/Min Dong</option>
      <option key="pa" value="pa">Eastern Punjabi</option>
      <option key="arz" value="arz">Egyptian Arabic</option>
      <option key="eml" value="eml">Emilian-Romagnol</option>
      <option key="en" value="en">English</option>
      <option key="myv" value="myv">Erzya</option>
      <option key="eo" value="eo">Esperanto</option>
      <option key="et" value="et">Estonian</option>
      <option key="ee" value="ee">Ewe</option>
      <option key="ext" value="ext">Extremaduran</option>
      <option key="fo" value="fo">Faroese</option>
      <option key="hif" value="hif">Fiji Hindi</option>
      <option key="fj" value="fj">Fijian</option>
      <option key="fi" value="fi">Finnish</option>
      <option key="frp" value="frp">Franco-Provençal/Arpitan</option>
      <option key="fr" value="fr">French</option>
      <option key="fur" value="fur">Friulian</option>
      <option key="ff" value="ff">Fula</option>
      <option key="gag" value="gag">Gagauz</option>
      <option key="gl" value="gl">Galician</option>
      <option key="gan" value="gan">Gan Chinese</option>
      <option key="ka" value="ka">Georgian</option>
      <option key="de" value="de">German</option>
      <option key="glk" value="glk">Gilaki</option>
      <option key="gor" value="gor">Gorontalo</option>
      <option key="got" value="got">Gothic</option>
      <option key="el" value="el">Greek</option>
      <option key="kl" value="kl">Greenlandic</option>
      <option key="gn" value="gn">Guarani</option>
      <option key="gcr" value="gcr">Guianan Creole</option>
      <option key="gu" value="gu">Gujarati</option>
      <option key="ht" value="ht">Haitian Creole</option>
      <option key="hak" value="hak">Hakka</option>
      <option key="ha" value="ha">Hausa</option>
      <option key="haw" value="haw">Hawaiian</option>
      <option key="he" value="he">Hebrew</option>
      <option key="mrj" value="mrj">Hill Mari</option>
      <option key="hi" value="hi">Hindi</option>
      <option key="hu" value="hu">Hungarian</option>
      <option key="is" value="is">Icelandic</option>
      <option key="io" value="io">Ido</option>
      <option key="ig" value="ig">Igbo</option>
      <option key="ilo" value="ilo">Ilokano</option>
      <option key="smn" value="smn">Inari Sami</option>
      <option key="id" value="id">Indonesian</option>
      <option key="inh" value="inh">Ingush</option>
      <option key="ia" value="ia">Interlingua</option>
      <option key="ie" value="ie">Interlingue</option>
      <option key="iu" value="iu">Inuktitut</option>
      <option key="ik" value="ik">Inupiaq</option>
      <option key="azb" value="azb">Iran Azerbaijani</option>
      <option key="ga" value="ga">Irish</option>
      <option key="it" value="it">Italian</option>
      <option key="jam" value="jam">Jamaican Patois</option>
      <option key="ja" value="ja">Japanese</option>
      <option key="jv" value="jv">Javanese</option>
      <option key="lad" value="lad">Judaeo-Spanish/Ladino</option>
      <option key="kbd" value="kbd">Kabardian</option>
      <option key="kbp" value="kbp">Kabiye</option>
      <option key="kab" value="kab">Kabyle</option>
      <option key="xal" value="xal">Kalmyk</option>
      <option key="kn" value="kn">Kannada</option>
      <option key="pam" value="pam">Kapampangan</option>
      <option key="krc" value="krc">Karachay-Balkar</option>
      <option key="kaa" value="kaa">Karakalpak</option>
      <option key="ks" value="ks">Kashmiri</option>
      <option key="csb" value="csb">Kashubian</option>
      <option key="kk" value="kk">Kazakh</option>
      <option key="km" value="km">Khmer</option>
      <option key="ki" value="ki">Kikuyu</option>
      <option key="rw" value="rw">Kinyarwanda</option>
      <option key="rn" value="rn">Kirundi</option>
      <option key="kv" value="kv">Komi</option>
      <option key="koi" value="koi">Komi-Permyak</option>
      <option key="kg" value="kg">Kongo</option>
      <option key="gom" value="gom">Konkani</option>
      <option key="ko" value="ko">Korean</option>
      <option key="avk" value="avk">Kotava</option>
      <option key="ku" value="ku">Kurdish (Kurmanji)</option>
      <option key="ckb" value="ckb">Kurdish (Sorani)</option>
      <option key="ky" value="ky">Kyrgyz</option>
      <option key="lld" value="lld">Ladin</option>
      <option key="lbe" value="lbe">Lak</option>
      <option key="lo" value="lo">Lao</option>
      <option key="ltg" value="ltg">Latgalian</option>
      <option key="la" value="la">Latin</option>
      <option key="lv" value="lv">Latvian</option>
      <option key="lez" value="lez">Lezgian</option>
      <option key="lij" value="lij">Ligurian</option>
      <option key="li" value="li">Limburgish</option>
      <option key="ln" value="ln">Lingala</option>
      <option key="lfn" value="lfn">Lingua Franca Nova</option>
      <option key="lt" value="lt">Lithuanian</option>
      <option key="olo" value="olo">Livvi-Karelian</option>
      <option key="jbo" value="jbo">Lojban</option>
      <option key="lmo" value="lmo">Lombard</option>
      <option key="nds" value="nds">Low German</option>
      <option key="dsb" value="dsb">Lower Sorbian</option>
      <option key="lg" value="lg">Luganda</option>
      <option key="lb" value="lb">Luxembourgish</option>
      <option key="mk" value="mk">Macedonian</option>
      <option key="mad" value="mad">Madurese</option>
      <option key="mai" value="mai">Maithili</option>
      <option key="mg" value="mg">Malagasy</option>
      <option key="ms" value="ms">Malay</option>
      <option key="ml" value="ml">Malayalam</option>
      <option key="mt" value="mt">Maltese</option>
      <option key="gv" value="gv">Manx</option>
      <option key="mr" value="mr">Marathi</option>
      <option key="mzn" value="mzn">Mazanderani</option>
      <option key="mhr" value="mhr">Meadow Mari</option>
      <option key="min" value="min">Minangkabau</option>
      <option key="xmf" value="xmf">Mingrelian</option>
      <option key="mwl" value="mwl">Mirandese</option>
      <option key="mdf" value="mdf">Moksha</option>
      <option key="mnw" value="mnw">Mon</option>
      <option key="mn" value="mn">Mongolian</option>
      <option key="ary" value="ary">Moroccan Arabic</option>
      <option key="mi" value="mi">Māori</option>
      <option key="nqo" value="nqo">N&apos;Ko</option>
      <option key="nah" value="nah">Nahuatl</option>
      <option key="na" value="na">Nauruan</option>
      <option key="nv" value="nv">Navajo</option>
      <option key="nap" value="nap">Neapolitan</option>
      <option key="ne" value="ne">Nepali</option>
      <option key="new" value="new">Newar/Nepal Bhasa</option>
      <option key="nia" value="nia">Nias</option>
      <option key="pih" value="pih">Norfolk</option>
      <option key="nrm" value="nrm">Norman</option>
      <option key="frr" value="frr">North Frisian</option>
      <option key="se" value="se">Northern Sami</option>
      <option key="nso" value="nso">Northern Sotho</option>
      <option key="no" value="no">Norwegian (Bokmål)</option>
      <option key="nn" value="nn">Norwegian (Nynorsk)</option>
      <option key="nov" value="nov">Novial</option>
      <option key="oc" value="oc">Occitan</option>
      <option key="or" value="or">Odia</option>
      <option key="cu" value="cu">Old Church Slavonic</option>
      <option key="ang" value="ang">Old English/Anglo-Saxon</option>
      <option key="om" value="om">Oromo</option>
      <option key="os" value="os">Ossetian</option>
      <option key="pfl" value="pfl">Palatine German</option>
      <option key="pi" value="pi">Pali</option>
      <option key="pag" value="pag">Pangasinan</option>
      <option key="pap" value="pap">Papiamento</option>
      <option key="ps" value="ps">Pashto</option>
      <option key="pdc" value="pdc">Pennsylvania German</option>
      <option key="fa" value="fa">Persian</option>
      <option key="pcd" value="pcd">Picard</option>
      <option key="pms" value="pms">Piedmontese</option>
      <option key="pl" value="pl">Polish</option>
      <option key="pnt" value="pnt">Pontic Greek</option>
      <option key="pt" value="pt">Portuguese</option>
      <option key="qu" value="qu">Quechua</option>
      <option key="ksh" value="ksh">Ripuarian</option>
      <option key="ro" value="ro">Romanian</option>
      <option key="rm" value="rm">Romansh</option>
      <option key="ru" value="ru">Russian</option>
      <option key="rue" value="rue">Rusyn</option>
      <option key="szy" value="szy">Sakizaya</option>
      <option key="sm" value="sm">Samoan</option>
      <option key="bat-smg" value="bat-smg">Samogitian</option>
      <option key="sg" value="sg">Sango</option>
      <option key="sa" value="sa">Sanskrit</option>
      <option key="sat" value="sat">Santali</option>
      <option key="skr" value="skr">Saraiki</option>
      <option key="sc" value="sc">Sardinian</option>
      <option key="stq" value="stq">Saterland Frisian</option>
      <option key="sco" value="sco">Scots</option>
      <option key="gd" value="gd">Scottish Gaelic</option>
      <option key="sr" value="sr">Serbian</option>
      <option key="sh" value="sh">Serbo-Croatian</option>
      <option key="shn" value="shn">Shan</option>
      <option key="sn" value="sn">Shona</option>
      <option key="scn" value="scn">Sicilian</option>
      <option key="szl" value="szl">Silesian</option>
      <option key="simple" value="simple">Simple English</option>
      <option key="sd" value="sd">Sindhi</option>
      <option key="si" value="si">Sinhalese</option>
      <option key="sk" value="sk">Slovak</option>
      <option key="sl" value="sl">Slovene</option>
      <option key="so" value="so">Somali</option>
      <option key="st" value="st">Sotho</option>
      <option key="zh-min-nan" value="zh-min-nan">Southern Min/Min Nan</option>
      <option key="es" value="es">Spanish</option>
      <option key="srn" value="srn">Sranan Tongo</option>
      <option key="su" value="su">Sundanese</option>
      <option key="sw" value="sw">Swahili</option>
      <option key="ss" value="ss">Swazi</option>
      <option key="sv" value="sv">Swedish</option>
      <option key="tl" value="tl">Tagalog</option>
      <option key="ty" value="ty">Tahitian</option>
      <option key="tg" value="tg">Tajik</option>
      <option key="ta" value="ta">Tamil</option>
      <option key="roa-tara" value="roa-tara">Tarantino</option>
      <option key="tt" value="tt">Tatar</option>
      <option key="te" value="te">Telugu</option>
      <option key="tet" value="tet">Tetum</option>
      <option key="th" value="th">Thai</option>
      <option key="bo" value="bo">Tibetan</option>
      <option key="ti" value="ti">Tigrinya</option>
      <option key="tpi" value="tpi">Tok Pisin</option>
      <option key="to" value="to">Tongan</option>
      <option key="ts" value="ts">Tsonga</option>
      <option key="tn" value="tn">Tswana</option>
      <option key="tcy" value="tcy">Tulu</option>
      <option key="tum" value="tum">Tumbuka</option>
      <option key="tr" value="tr">Turkish</option>
      <option key="tk" value="tk">Turkmen</option>
      <option key="tyv" value="tyv">Tuvan</option>
      <option key="tw" value="tw">Twi</option>
      <option key="udm" value="udm">Udmurt</option>
      <option key="uk" value="uk">Ukrainian</option>
      <option key="hsb" value="hsb">Upper Sorbian</option>
      <option key="ur" value="ur">Urdu</option>
      <option key="ug" value="ug">Uyghur</option>
      <option key="uz" value="uz">Uzbek</option>
      <option key="ve" value="ve">Venda</option>
      <option key="vec" value="vec">Venetian</option>
      <option key="vep" value="vep">Veps</option>
      <option key="vi" value="vi">Vietnamese</option>
      <option key="rmy" value="rmy">Vlax Romani</option>
      <option key="vo" value="vo">Volapük</option>
      <option key="fiu-vro" value="fiu-vro">Võro</option>
      <option key="wa" value="wa">Walloon</option>
      <option key="war" value="war">Waray</option>
      <option key="cy" value="cy">Welsh</option>
      <option key="vls" value="vls">West Flemish</option>
      <option key="fy" value="fy">West Frisian</option>
      <option key="hyw" value="hyw">Western Armenian</option>
      <option key="pnb" value="pnb">Western Punjabi</option>
      <option key="wo" value="wo">Wolof</option>
      <option key="wuu" value="wuu">Wu</option>
      <option key="xh" value="xh">Xhosa</option>
      <option key="sah" value="sah">Yakut/Sakha</option>
      <option key="yi" value="yi">Yiddish</option>
      <option key="yo" value="yo">Yoruba</option>
      <option key="cbk-zam" value="cbk-zam">Zamboanga Chavacano</option>
      <option key="diq" value="diq">Zazaki</option>
      <option key="zea" value="zea">Zeelandic</option>
      <option key="za" value="za">Zhuang</option>
      <option key="zu" value="zu">Zulu</option>
    </select>
  );
}