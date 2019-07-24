import TypeStart from "./typestart";
import { Settings } from "./interfaces";
import widget from "./widget.html";
import "./styles/index.scss";

export default class Feeedback extends TypeStart {
  container?: HTMLDivElement;
  settings: Settings;
  constructor(settings: Settings) {
    super();
    this.settings = settings || {};
    this.emitter.emit("ready");
  }
  create() {
    if (this.container) return;
    this.emitter.emit("beforeCreate", widget);
    this.container = document.createElement("div");
    this.container.innerHTML = widget;
    const appendTo = this.settings.appendTo || document.body;
    if (appendTo) {
      appendTo.appendChild(this.container);
    }
    this.emitter.emit("created", this.container);
  }
  open() {
    if (!this.container) this.create();
    this.emitter.emit("open");
  }
}

(<any>window).Feeedback = Feeedback;
