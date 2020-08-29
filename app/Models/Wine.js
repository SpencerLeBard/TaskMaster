import { generateId } from "../utils.js";

export default class Wine {
  constructor({ id, style, type, }) {
    //Style = "white/full-bodied red , Type = Syrah
    this.id = id || generateId()
    this.style = style
    this.type = type || []


  }
  get wineTemplate() {
    return `
    <div class="card p-3 my-3">
    <h5 class="card-header">${this.style}<i class="fa fa-trash 
    align-self-end" onclick="app.wineController.removeStyle('${this.id}')"></i></h5>
    <div class="card-body">
      <h5 class="card-title">${this.type}</h5>
    </div>
    <form class="form-inline d-flex flex-direction-row" onsubmit="app.wineController.newType(event, '${this.id}')">
    <div class="form-group">
        <label for=""></label>
        <input type="text" name="type" id="type" class="form-control" placeholder="Type..." aria-describedby="helpId">
        <button type= "submit">Add Type</button>
    </div>
</form>
    <div class="d-flex flex-direction-row col-12 flex-wrap">${this.typeTemplate}</div>
  </div>
    `
  }


  get typeTemplate() {
    let template = ""
    this.type.forEach(c => {
      template += `<div class="col-3 my-1">
    <div class="card">
      <div class="card-body">
        <p class="card-text">${c}</p>
        <i class="fa fa-trash align-self-end" onclick="app.wineController.removeType('${this.id}', '${c}')"></i>
      </div>
    </div>
  </div>`
    })
    return template
  }
}
