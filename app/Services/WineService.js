import Wine from "../Models/Wine.js";
import STORE from "../store.js"


class WineService {


  newStyle(newPost) {
    let newStyle = new Wine(newPost)
    STORE.State.wines.push(newStyle)
  }

  newType(newType, wineid) {
    let wine = STORE.State.wines.find(c => c.id == wineid)
    wine.type.push(newType)
  }
  removeStyle(id) {
    if (confirm('Do you want to delete this style?')) {
      STORE.State.wines = STORE.State.wines.filter(p => p.id != id)
    } else {
    }
  }
  removeType(typeId, typeName) {
    if (confirm('Are you sure you want to delete this Type?')) {
      let wine = STORE.State.wines.find(b => b.id == typeId)
      let typeIndex = wine.type.findIndex(c => c == typeName)
      wine.type.splice(typeIndex, 1)
    } else {
    }

  }
}



const SERVICE = new WineService();
export default SERVICE;
