var path = require('path');

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
        loader: "style!css!sass"
      },
      {
        test: /\.jsx$/,
        loader: 'jsx'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
