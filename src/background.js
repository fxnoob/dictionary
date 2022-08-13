import "@babel/polyfill";
import constants from "../constants";
import db from "./services/dbService";
import schema from "./services/schema";
import Routes from "./routes";
import messagePassing from "./services/messagePassing";

/**
 * Main extension functionality
 *
 * @class Main
 */
class Main {
  constructor() {
    // set feedback form url
    this.setFeedbackFormUrl();
    this.init().catch(() => {});
  }

  init = async () => {
    await this.initDb();
    Routes();
  };
  /**
   * mount content script on previously opened tabs
   * @method
   * @memberof Main
   */
  mountCSOnPreviouslyOpenedTabs = async () => {
    chrome.tabs.query({}, result => {
      result.map(tabInfo => {
        messagePassing.sendMessageToTab(
          "/cs_mounted",
          tabInfo.id,
          {},
          async res => {
            if (!res) {
              chrome.tabs.executeScript(tabInfo.id, {
                file: "content_script.bundle.js"
              });
            }
          }
        );
      });
    });
  };
  /**
   * initialize db settings
   * @method
   * @memberof Main
   */
  initDb = async () => {
    const res = await db.get("_loaded");
    if (!res.hasOwnProperty("_loaded32")) {
      await db.set({ _loaded: true, ...schema.data });
      this.mountCSOnPreviouslyOpenedTabs().catch(()=>{});
    }
  };
  /**
   *set feedback form url shown while uninstalling
   * */
  setFeedbackFormUrl = () => {
    chrome.runtime.setUninstallURL(constants.support.uninstallFeedbackForm);
  };
}

new Main();
