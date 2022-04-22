const { generateGuid } = require("./src/services/guid");
const constants = {
  pricing: {
    label: "inr 370 ~ $4.85",
  },
  appConfig: {
    appName: "Dictionary - Oxford, Webster and Wikipedia",
    urls: {
      chrome: "CHROME_STORE_URL",
      firefox: "FIREFOX_STORE_URL",
      edge: "EDGE_STORE_URL",
    },
    // put extension key here if required which would only be used in development mode
    key:
      // eslint-disable-next-line max-len
      "-----BEGIN PUBLIC KEY-----\n" +
      "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUE8kACLHk4WCQGZM/bj\n" +
      "e15YBWttApH8CSZOHF+h9tln5ZAvw3puYPMqzCjaQ4NHlIXyDNHqkuxSfbw4xlop\n" +
      "lwOWHgXi6462VPLwnJI2TINuLMExBh0zTLnHjOLYhteK6fZm6Od8f2sFkivWhgBG\n" +
      "eLw9TK5Dzmua9aRYPPldYFdBPeTvjw1UTLAyE6sBbeSAjpnd6DMrkaePOru36mBX\n" +
      "93WO5oh57llqEbMETCyDe5GMUqE5vPJnGwwMZA7YMD1feqAyPzg9vP1zeAY/BX15\n" +
      "K1mbJtI2eiBRRcO2+P+s6bRPJ6BGvfByBWj7fpY0X+yEGPLoLLNPLL+xd9ut01Bz\n" +
      "CwIDAQAB\n" +
      "-----END PUBLIC KEY-----",
  },
  contentScript: {
    popupSkinColors: ["#8ED1FC", "#C4DEF6", "#C1E1C5", "#FAD0C3", "#FEF3BD"],
    mountId: generateGuid(),
  },
  browser: {
    firefox: {
      manifest: {
        browser_specific_settings: {
          gecko: {
            id: "dictionary@fxnoob",
            strict_min_version: "42.0",
          },
        },
      },
    },
  },
  support: {
    donate: "https://www.patreon.com/fxnoob",
    howToVideoLink: "https://www.youtube.com/watch?v=RIxMQJPt5vc",
    uninstallFeedbackForm: "https://forms.gle/LWUPUYp1n5ChHDkA9",
    premium: "https://voicetyping.live/payment_dict",
  },
  settings: {
    trialUseCount: 50,
  },
};

module.exports = constants;
