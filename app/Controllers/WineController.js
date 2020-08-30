import WineService from "../Services/WineService.js";
import STORE from "../store.js"

//NOTE Don't forget to render to the screen after every data change

function _drawWine() {
  //NOTE
  // STORE.saveState()
  let template = ""
  STORE.State.wines.forEach(b => template += b.wineTemplate)
  document.getElementById("wine-tasks").innerHTML = template
}

function drawFormWine() {
  let template = `
  <div class="card my-3 new-wine-form shadow">
  <h5 class="card-header">New Wine Style</h5>
  <div class="card-body">
      <form class="form-group" onsubmit="app.wineController.newStyle(event)">
          <label class="p-3" for="style">Style: (Example: Full-Bodied Red,  Sparkling White... etc.) </label>
          <input class="p-1" type="text" class="form-control" name="style" id="style" aria-describedby="helpId"
              placeholder="Style Here.....">
         
              <button class="btn btn-danger" type="submit">Add Wine Style</button>

              <select class ="bg-danger text-light"id="colorselector">
              <option value="106" data-color="#A0522D">Red</option>
              <option class ="bg-light" value="47" data-color="#CD5C5C" selected="selected">White</option>
          </select>
          <script>
              $('#colorselector').colorselector();
          </script>
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
    console.log(id);
    WineService.removeStyle(id)
    _drawWine()
    drawFormWine()
  }
  removeType(typeId, typeName) {
    WineService.removeType(typeId, typeName)
    _drawWine()
  }
}
