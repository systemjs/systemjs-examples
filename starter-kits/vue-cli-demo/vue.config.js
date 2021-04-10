const HtmlSystemJSHtmlPlugins = require("./plugins/WebpackSystemJSHtmlPlugins");
module.exports = {
  css: {
    extract: true
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: (config) => {
    config.output
      .filename("js/[name].js")
      .library("vueApp")
      .libraryTarget("umd")
      .end();
    config.plugin("html").tap((args) => {
      args[0].inject = "body";
      return args;
    });
    config
      .plugin("WebpackSystemJSHtmlPlugins")
      .use(HtmlSystemJSHtmlPlugins)
      .after("preload");
    config.externals(["vue", "vue-router"]);
  },
  configureWebpack: {
    module: {
      rules: [{ parser: { system: false } }]
    }
  }
};
