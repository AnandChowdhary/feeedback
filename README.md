# 🙋 Feeedback

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/feeedback.svg)](https://travis-ci.org/AnandChowdhary/feeedback)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/feeedback.svg)](https://github.com/AnandChowdhary/feeedback/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/feeedback.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/feeedback.svg)](https://www.npmjs.com/package/feeedback)
[![NPM version](https://img.shields.io/npm/v/feeedback.svg)](https://www.npmjs.com/package/feeedback)
[![Types](https://img.shields.io/npm/types/feeedback.svg)](https://www.npmjs.com/package/feeedback)


Feeedback is a JavaScript widget to easily collect feedback from your users. It's small, accessible, and customizable.

## ⭐ Getting started

Install the library as a dependency:

```bash
npm install feeedback
```

Or, if you're using Yarn:

```bash
yarn add feeedback
```

Then import the library:

```js
import Feeedback from "feeedback";
```

And initialize it with an optional settings object:

```js
const widget = new Feeedback({
  onSubmit: feedback => new Promise((resolve, reject) => {
    // Send feedback to your server
    resolve();
  });
});
```

You can also use a CDN:

```html
<script src="https://unpkg.com/feeedback"></script>
```

When you want to open the feedback modal, you can do:

```js
widget.open();
```

## 🛠️ Development

Start development server with HMR and prettier:

```bash
yarn start
```

### Production

Build a production version:

```bash
yarn build
```

## 💡 Examples

### Google Analytics

The easiest way to collect feedback to to use Google Analytics as a backend. If you already have GA loaded on your webpage:

```js
ga("create", "UA-XXXXX-Y", "auto");

const widget = new Feeedback({
  onSubmit: feedback => new Promise((resolve, reject) => {
    ga("send", "feedback", feedback.rating, feedback.message);
    resolve();
  });
});
```

### Custom backend

```js
const widget = new Feeedback({
  onSubmit: feedback =>
    fetch("https://example.com/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(feedback)
    });
});
```

### Events

Feeedback emits events which you can listen to:

```js
const widget = new Feeedback();
widget.on("beforeSubmit", result => {
  // Do something with `result`
});
```

You can use `.off()` to stop listening to an event, and `"*"` to subscribe to all events. Events emitted are, in order of lifecycle:

- `ready`
- `beforeCreate`
- `created`
- `open` and `close`
- `reset`
- `beforeSubmit`
- `submit` or `error`
- `finish`

## 📝 License

MIT © Anand Chowdhary
