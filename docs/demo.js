var feedbackWidget = new window.Feeedback();
feedbackWidget.on("*", function (type, event) {
    console.log("Emitted " + type + " event", event);
});
// Open the widget on launch
feedbackWidget.open();
var button = document.querySelector(".button");
if (button) {
    button.addEventListener("click", function () { return feedbackWidget.open(); });
}
