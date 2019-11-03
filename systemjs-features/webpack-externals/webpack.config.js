const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// See https://github.com/joeldenning/systemjs-webpack-interop
const systemjsInterop = require('systemjs-webpack-interop')

module.exports = systemjsInterop.modifyWebpackConfig({
  entry: path.resolve(__dirname, 'src/entry.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
  plugins: [new CleanWebpackPlugin()],
  // Webpack externals will be shared across bundles and come from the import map and systemjs
  externals: ['vue', 'vue-router'],
});