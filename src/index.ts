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
    this.trapFocus();
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
    this.reset();
  }
  reset() {
    if (this.container) {
      this.container.style.display = "none";
      this.container.innerHTML = widget;
      this.listen();
      this.emitter.emit("reset", this.container);
    }
  }

  private submit(result: Result) {
    this.emitter.emit("beforeSubmit", result);
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
  private trapFocus() {
    // https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
    if (!this.container) return;
    const focusableEls = this.container.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    ) as NodeListOf<HTMLElement>;
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;
    this.container.addEventListener("keydown", event => {
      const isTabPressed = event.key === "Tab" || event.keyCode === KEYCODE_TAB;
      if (!isTabPressed) return;
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          event.preventDefault();
        }
      }
    });
  }
  private listen() {
    if (!this.container) return;
    const form = this.container.querySelector("form");
    if (!form) return;
    form.addEventListener("submit", event => this.formSubmit(event));
    const close = this.container.querySelector("button.close");
    if (close) close.addEventListener("click", () => this.close());
    const background = this.container.querySelector(".feeedback-background");
    if (background) background.addEventListener("click", () => this.close());
  }
  private formSubmit(event: Event) {
    event.preventDefault();
    if (!this.container) return;
    const form = this.container.querySelector("form");
    if (!form) return;
    const loading = this.container.querySelector(
      ".loading"
    ) as HTMLDivElement | null;
    const success = this.container.querySelector(
      ".success"
    ) as HTMLDivElement | null;
    const error = this.container.querySelector(
      ".error"
    ) as HTMLDivElement | null;
    form.style.display = "none";
    if (loading) loading.style.display = "block";
    let rating = "0";
    let message = "";
    const ratingInput = form.querySelector(
      "input[name='emoji_ID_']"
    ) as HTMLInputElement | null;
    if (ratingInput) rating = ratingInput.value;
    const messageInput = form.querySelector(
      "textarea[name='message_ID_']"
    ) as HTMLInputElement | null;
    console.log(messageInput);
    if (messageInput) message = messageInput.value;
    this.submit({
      rating: parseInt(rating),
      message
    } as Result)
      .then(response => {
        this.emitter.emit("submit", response);
        if (loading) loading.style.display = "none";
        if (success) success.style.display = "block";
      })
      .catch(err => {
        this.emitter.emit("error", err);
        if (loading) loading.style.display = "none";
        if (error) error.style.display = "block";
      })
      .finally(() => {
        setTimeout(() => {
          this.close();
          this.emitter.emit("finish");
        }, this.settings.messageDelay || 2500);
      });
  }
}

(<any>window).Feeedback = Feeedback;
