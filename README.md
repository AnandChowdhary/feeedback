# 🙋 Feeedback

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/feeedback.svg)](https://travis-ci.org/AnandChowdhary/feeedback)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/feeedback/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/feeedback?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/feeedback.svg)](https://github.com/AnandChowdhary/feeedback/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/feeedback.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/feeedback.svg)](https://www.npmjs.com/package/feeedback)

Feeedback is a JavaScript widget to easily collect feedback from your users.

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

And initialize it with an optional selector:

```js
const feeedback = new Feeedback("#heading");
```

You can also use a CDN:

```html
<script src="https://unpkg.com/feeedback"></script>
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

## 💡 Why another starter?

I've used a bunch of different Typescript library starters, but they all have tons of boilerplate (super long build rules, scripts for releases, publishing, building, etc.) 

Feeedback is—like the name suggests—a starting point.

## 📝 License

MIT © Anand Chowdhary
