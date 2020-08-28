import WineController from "./Controllers/WineController.js";

//NOTE This should be good to go
class App {
  WineController = new WineController();
}

window["app"] = new App();
