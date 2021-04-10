# vue-system-demo

vue project run with [SystemJS](https://github.com/systemjs/systemjs) which created by vue/cli

## plugins folder

`WebpackSystemJSHtmlPlugins` is [HtmlWebpackPlugin@3.2.0](https://github.com/jantimon/html-webpack-plugin/tree/v3.2.0) ([vue/cli-service](https://www.npmjs.com/package/@vue/cli-service) dependency version is `3.2.0`) extension, which apply `html-webpack-plugin-alter-asset-tags` hook to set `script` attribute `type="systemjs-module"` 
