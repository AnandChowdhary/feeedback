const feedbackWidget = new (<any> window).Feeedback();

feedbackWidget.on("*", (type: string, event: any) => {
  console.log(`Emitted ${type} event`, event);
});

// Open the widget on launch
feedbackWidget.open();
