import WineService from "../Services/WineService.js";
import STORE from "../store.js"
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawWine() {
  let template = ""
  STORE.State.wines.forEach(b => template += b.wineTemplate)
  document.getElementById("create-wine").innerHTML = template
}

function drawForm() {
  let template = `
  <div class="card my-3">
  <h5 class="card-header">New Wine</h5>
  <div class="card-body">
      <form class="form-group" onsubmit="app.WineController.newStyle(event)">
          <label for="title">Title</label>
          <input type="text" class="form-control" name="title" id="title" aria-describedby="helpId"
              placeholder="Title of post.....">
          <div class="">
              <label for="content">Content</label>
              <textarea class="form-control" id="content" name="name" rows="3"></textarea>
          </div>
          <button class="btn btn-warning" type="submit">Post Wine</button>
      </form>
  </div>
</div>
  `
  document.getElementById("create-wine").innerHTML = template
}


export default class WineController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawWine();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
