# react_2021

[![](https://img.shields.io/badge/React-17.0.1-orange.svg)](https://reactjs.org) [![](https://img.shields.io/badge/parcel-2.0.0-royalblue.svg)](https://parceljs.org/) [![](https://img.shields.io/badge/Node.js-15.9.0-yellowgreen.svg)](https://nodejs.org/en/) [![](https://img.shields.io/badge/LICENSE-MIT-green.svg)](./LICENSE)

This repo demonstrates how to use ReactJS to build a fancy new frontend. It uses some of the newer React concepts like [*hooks*](https://reactjs.org/docs/hooks-intro.html), uses parcel 2.0.0 for [*basic minification*](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) and [*style processing*](https://webpack.js.org/plugins/mini-css-extract-plugin/), and the absence of Redux.

# Use

Start it up:

```ZSH
npm i
npm run build-parcel-prod
npm run build-parcel
```

After you've compiled the React app the first time, you can skip building and load the static app directly via:

```ZSH
npm run live
```

> You will need to comment out the correct line (**44**) in [index.html](public/index.html#L44)

> By default, the http server will serve from http://localhost:8181

Shut it down:

```ZSH
npm run stop-win
nom run stop-linux
```

## Licensing and Use

This is MIT Licensed.

