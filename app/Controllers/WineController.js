import WineService from "../Services/WineService.js";
import STORE from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawWine() {
  let template = ""
  STORE.State.wines.forEach(b => template += b.wineTemplate)
  document.getElementById("wine-tasks").innerHTML = template
}

function drawFormWine() {
  let template = `
  <div class="card my-3">
  <h5 class="card-header">New Wine Style</h5>
  <div class="card-body">
      <form class="form-group" onsubmit="app.wineController.newStyle(event)">
          <label for="style">Style: (Example: Syrah, Sauvignon Blanc... etc.) </label>
          <input type="text" class="form-control" name="style" id="style" aria-describedby="helpId"
              placeholder="Style Here.....">
         
              <button class="btn btn-warning" type="submit">Add Wine Style</button>
              </form>
              </div>
  </div>
</div>
  `
  document.getElementById("create-wine").innerHTML = template
}


export default class WineController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawWine();
    drawFormWine();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  newStyle(event) {
    event.preventDefault();
    let form = event.target
    let newPost = {
      style: form.style.value,
    }
    WineService.newStyle(newPost)
    _drawWine()
    form.reset();
  }

  newType(event, typeid) {
    event.preventDefault()
    let form = event.target
    let newType = form.type.value

    WineService.newType(newType, typeid)
    _drawWine()
  }

  removeStyle(id) {
    WineService.removeStyle(id)
    _drawWine()
  }

}