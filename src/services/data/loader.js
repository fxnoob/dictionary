let loadedModule;
if(process.env.browser){
  loadedModule = {};
}else{
  loadedModule = require('./data.json');
}
export default loadedModule;