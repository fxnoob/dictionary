/**
 * Schema class object
 *
 * @export
 * @class Schema
 */
class Schema {
  constructor() {
    this.data = {
      popup: true, // dictionary popup visibility
      popupSkinColor: "#FEF3BD"
    };
  }
  set(data) {
    this.data = data;
  }
}
const schema  = new Schema();
export default schema;
