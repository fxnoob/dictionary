import "@babel/polyfill";
import constants from "../constants";
import db from "./services/dbService";
import schema from "./services/schema";
import Routes from "./routes";

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
    await Routes();
  };
  /**
   * initialize db settings
   * @method
   * @memberof Main
   */
  initDb = async () => {
    const res = await db.get("_loaded");
    if (!res.hasOwnProperty("_loaded")) {
      await db.set({ _loaded: true, ...schema.data });
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
