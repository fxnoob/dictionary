/**
 * Schema class object
 *
 * @export
 * @class Schema
 */
class Schema {
  constructor() {
    this.data = {
      langId: 'en', // default language for dictionary word lookup
      popup: true, // dictionary popup visibility
      popupSkinColor: "#FEF3BD", // default skin color for content script popup
      wikitionaryAllowed: true, // fetch defs from wikipedia if not found in data
    };
  }
  set(data) {
    this.data = data;
  }
}
const schema  = new Schema();
export default schema;
