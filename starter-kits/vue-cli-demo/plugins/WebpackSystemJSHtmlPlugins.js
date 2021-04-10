class WebpackSystemJSHtmlPlugin {
  apply(compiler) {
    compiler.plugin("compilation", (compilation) => {
      compilation.plugin("html-webpack-plugin-alter-asset-tags", (data) => {
        data.body = data.body.map((script) => {
          if (script.attributes) {
            script.attributes = Object.assign(script.attributes, {
              type: "systemjs-module"
            });
          }
          return script;
        });
      });
    });
  }
}

module.exports = WebpackSystemJSHtmlPlugin;
