import messagePassing from "./services/messagePassing";
import MessagePassingExternalService from "./services/messagePassingExternal";
import wikiService from "./services/wikiService";
import db from "./services/dbService";
import constants from "../constants";
import chromeService from "./services/chromeService";

/**
 *
 * messagePassing object is the Messaging Passing Class Object
 * which contains methods suitable for message passing apis.
 *
 * */
const Routes = () => {
  /** Get dictionary words from dictionary worker */
  messagePassing.on("/get_words", async (req, res) => {
    const { term, id } = req;
    db.increment("used")
      .then(async (used) => {
        const { paid } = await db.get("paid");
        if (used > constants.settings.trialUseCount && !paid) {
          const paymentPopupURL = `${chrome.runtime.getURL(
            "option.html"
          )}?utm=premium`;
          chrome.tabs.create({ url: paymentPopupURL }, () => {});
        } else {
          let dicts = [];
          const { langId } = await db.get("langId");
          const wikiWord = await wikiService(term, langId);
          if (wikiWord) {
            dicts = [{ word: term, meanings: wikiWord.lang_meanings }];
          }
          res({ dicts, resId: id });
        }
      })
      .catch(() => {});
  });
  // open settings
  messagePassing.on("/open_settings", async () => {
    chromeService.openHelpPage('settings');
  });

  /** Listening to website routes */
  MessagePassingExternalService.on("/upgrade", async () => {
    await db.set({
      paid: true,
    });
  });
};
export default Routes;
