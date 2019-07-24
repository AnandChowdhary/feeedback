const feedbackWidget = new (<any> window).Feeedback();

feedbackWidget.on("*", (type: string, event: any) => {
  console.log(`Emitted ${type} event`, event);
});

// Open the widget on launch
feedbackWidget.open();

const button = document.querySelector(".button");
if (button) {
  button.addEventListener("click", () => feedbackWidget.open());
}
