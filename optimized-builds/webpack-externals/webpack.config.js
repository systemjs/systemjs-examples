const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  devtool: 'sourcemap',
  plugins: [new CleanWebpackPlugin()],
  // Webpack externals will be shared across bundles and come from the import map and systemjs
  externals: ['vue', 'vue-router'],
};