var feedbackWidget = new window.Feeedback();
feedbackWidget.on("*", function (type, event) {
    console.log("Emitted " + type + " event", event);
});
// Open the widget on launch
feedbackWidget.open();
