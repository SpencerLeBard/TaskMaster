import Wine from "./Models/Wine.js";

let _state = {
  /** @type {Wine[]} */
  wines: []
};



//NOTE this method will get the lists from local storage at the start of the app

function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.wines = data.wines.map(l => new Wine(l));
    _state = data;
  }
}
_loadState();

class Store {

  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
