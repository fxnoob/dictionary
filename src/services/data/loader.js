let loadedModule;
if(process.env.browser === "firefox"){
  loadedModule = {};
}else{
  loadedModule = require('./data.json');
}
export default loadedModule;