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
    this.listen();
    this.emitter.emit("created", this.container);
  }
  open() {
    if (!this.container) this.create();
    if (this.container) this.container.style.display = "block";
    this.emitter.emit("open");
  }
  close() {
    if (this.container) this.container.style.display = "none";
    this.emitter.emit("close");
  }
  private listen() {
    if (!this.container) return;
    const form = this.container.querySelector("form");
    if (!form) return;
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (form.parentElement) {
        const success = form.parentElement.querySelector(
          ".success"
        ) as HTMLDivElement;
        const error = form.parentElement.querySelector(
          ".error"
        ) as HTMLDivElement;
        form.style.display = "none";
        if (success) success.style.display = "block";
      }
      setTimeout(() => {
        this.close();
      }, this.settings.messageDelay || 3333);
    });
  }
}

(<any>window).Feeedback = Feeedback;
