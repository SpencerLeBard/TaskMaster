import Wine from "../Models/Wine.js";
import STORE from "../store.js"


class WineService {


  newStyle(newPost) {
    let newStyle = new Wine(newPost)
    STORE.State.wines.push(newStyle)
  }

  newType(newType, wineid) {
    // NOTE  when you find your wine that matches the id, you must access that found wines type property to push the newType to
    //store.state.wines.find returns your found wine
    let wine = STORE.State.wines.find(c => c.id == wineid)
    wine.type.push(newType)
  }
  removeStyle(id) {
    window.confirm("Are you sure you want to delete this style?")
    STORE.State.wines = STORE.State.wines.filter(p => p.id != id)
  }
  removeType(typeId, typeName) {
    window.confirm("Are you sure you want to delete this Type?")
    let wine = STORE.State.wines.find(b => b.id == typeId)
    let typeIndex = wine.type.findIndex(c => c == typeName)
    wine.type.splice(typeIndex, 1)
  }
}

// removeComment(commentId, commentName) {
//   let blog = STORE.State.Blogs.find(b => b.id == commentId)
//   let commentIndex = blog.comments.findIndex(c => c == commentName)
//   blog.comments.splice(commentIndex, 1)
// }




const SERVICE = new WineService();
export default SERVICE;
