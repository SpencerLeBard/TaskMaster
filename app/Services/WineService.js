import Wine from "../Models/Wine.js";
import STORE from "../store.js"


class WineService {


  newStyle(newPost) {
    let newStyle = new Wine(newPost)
    STORE.State.wines.push(newStyle)
  }

  newType(newType, wineid) {
    debugger
    // NOTE  when you find your wine that matches the id, you must access that found wines type property to push the newType to
    //store.state.wines.find returns your found wine
    let wine = STORE.State.wines.find(c => c.id == wineid)
    wine.type.push(newType)
  }
  removeStyle(id) {
    STORE.State.style = STORE.State.wines.filter(p => p.id != id)
  }

}




const SERVICE = new WineService();
export default SERVICE;
