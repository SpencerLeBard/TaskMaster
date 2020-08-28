import Wine from "../Models/Wine.js";
import STORE from "../store.js"


class WineService {


  newStyle(newPost) {
    let newStyle = new Wine(newPost)
    STORE.State.style.push(newStyle)
  }

  newType(newType, wineid) {
    let type = STORE.State.type.find(c => c.id == wineid)
    type.push(newType)
  }
  removeStyle(id) {
    STORE.State.style = STORE.State.style.filter(p => p.id != id)
  }
}




const SERVICE = new WineService();
export default SERVICE;
