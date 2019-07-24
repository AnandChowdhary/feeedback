import TypeStart from "./typestart";
import { Settings, Result } from "./interfaces";
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
  private submit(result: Result) {
    return new Promise((resolve, reject) => {
      if (typeof this.settings.onSubmit === "function") {
        this.settings
          .onSubmit(result)
          .then(result => resolve(result))
          .catch(error => reject(error));
      } else if (typeof this.settings.postResults === "object") {
        fetch(this.settings.postResults.endpoint, {
          method: this.settings.postResults.method,
          body: JSON.stringify(result),
          ...this.settings.postResults.fetchOptions
        })
          .then(result => resolve(result))
          .catch(error => reject(error));
      } else {
        reject(new Error("no-endpoint"));
      }
    });
  }
  private listen() {
    if (!this.container) return;
    const form = this.container.querySelector("form");
    if (!form) return;
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (form.parentElement) {
        const loading = form.parentElement.querySelector(
          ".loading"
        ) as HTMLDivElement | null;
        const success = form.parentElement.querySelector(
          ".success"
        ) as HTMLDivElement | null;
        const error = form.parentElement.querySelector(
          ".error"
        ) as HTMLDivElement | null;
        form.style.display = "none";
        if (loading) loading.style.display = "block";
        let rating = "0";
        let message = "";
        const ratingInput = form.querySelector(
          "input[name='option_ID_']"
        ) as HTMLInputElement | null;
        if (ratingInput) rating = ratingInput.value;
        const messageInput = form.querySelector(
          "input[name='option_ID_']"
        ) as HTMLInputElement | null;
        if (messageInput) message = messageInput.value;
        this.submit({
          rating: parseInt(rating),
          message
        } as Result)
          .then(() => {
            if (loading) loading.style.display = "none";
            if (success) success.style.display = "block";
          })
          .catch(error => {
            if (loading) loading.style.display = "none";
            if (error) error.style.display = "block";
          })
          .finally(() => {
            setTimeout(() => {
              this.close();
            }, this.settings.messageDelay || 2500);
          });
      }
    });
  }
}

(<any>window).Feeedback = Feeedback;
