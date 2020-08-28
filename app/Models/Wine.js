import { generateId } from "../utils.js";

export default class Wine {
  constructor({ data, style, type, year, opinion }) {
    //Style = "white/full-bodied red , Type = Syrah
    this.id = data.id || generateId()
    this.style = style
    this.type = type
    this.year = year
    this.opinion = opinion


  }
  get wineTemplate() {
    return `
    <div class="card my-3">
    <h5 class="card-header">${this.style}<i class="fa fa-trash align-self-end" onclick="app.WineController.removeWine('${this.id}')"></i></h5>
    <div class="card-body">
      <h5 class="card-title">${this.type}</h5>
      <p class="card-text">${this.opinion}</p>
    </div>
    <form class="form-inline d-flex flex-direction-row" onsubmit="app.WineController.addType(event, '${this.id}')">
    <div class="form-group">
        <label for=""></label>
        <input type="text" name="type" id="type" class="form-control" placeholder="type" aria-describedby="helpId">
        <button type= "submit">Add Type</button>
    </div>
</form>
    <div class="d-flex flex-direction-row col-12 flex-wrap">${this.typeTemplate}</div>
  </div>
    `
  }


  get typeTemplate() {
    let template = ""
    this.opinion.forEach(c => {
      template += `<div class="col-3 my-1">
    <div class="card">
      <div class="card-body">
        <p class="card-text">${c}</p>
        <i class="fa fa-trash align-self-end" onclick="app.WineController.removeType('${this.id}', '${c}')"></i>
      </div>
    </div>
  </div>`
    })
    return template
  }
}
