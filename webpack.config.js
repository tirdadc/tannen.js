var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'app/main'),
  },
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'bundle.js'
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
  externals: {
    'react': 'React',
    'moment': 'moment'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
