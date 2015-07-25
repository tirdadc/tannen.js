var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'stylesheets/tannen.css.scss'),
  output: {
    path: 'dist',
    filename: 'tannen.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass"
        )
      },
      {
        test: /\.jsx$/,
        loader: 'jsx'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("tannen.css")
  ]
};
