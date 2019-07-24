import TypeStart from "./typestart";
import widget from "./widget.html";
import "./styles/index.scss";

export default class Feeedback extends TypeStart {
  constructor() {
    super();
  }
  open() {
    this.emitter.emit("open", widget);
  }
}

(<any>window).Feeedback = Feeedback;
