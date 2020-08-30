import { generateId } from "../utils.js";

export default class Wine {
  constructor({ id, style, type, data }) {
    this.id = id || generateId()
    //Withoutextra (below) line draws everything.  Extra Line cannot draw
    this.id = data.id || generateId()
    //dalete thid line^^^^ for everything to work
    //     this.id = data.id || generateId(); ======= Marks example (TASKMASTER)
    this.style = style
    this.type = type || []
  }
  get wineTemplate() {
    return `
    <div class="card p-3 m-3 wine-card">
    <h5 class="card-header">${this.style}<i class="fa fa-trash
    align-self-end" onclick="app.wineController.removeStyle('${this.id}')"></i></h5>
    <div class="card-body">
    </div>
    <form class="form-inline d-flex flex-direction-row" onsubmit="app.wineController.newType(event, '${this.id}')">
    <div class="form-group">
        <label for=""></label>
        <input type="text" name="type" id="type" class="form-control" placeholder="Type: (Ex: Sarah, Riesling)" aria-describedby="helpId">
        <button type= "submit">Add Type</button>
    </div>
</form>
    <div class="d-flex flex-direction-column col-12 flex-wrap">${this.typeTemplate}</div>
  </div>
    `
  }


  get typeTemplate() {
    let template = ""
    this.type.forEach(c => {
      template += `<div class="col my-1">
    <div class="card">
      <div class="card-body">
        <p class="card-text">    <label><input type="checkbox" name="checkbox" value="value"></label>
        ${c}</p>
        <i class="fa fa-trash align-self-end" onclick="app.wineController.removeType('${this.id}', '${c}')"></i>
      </div>
    </div>
  </div>`
    })
    return template
  }
}
