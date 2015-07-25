var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/Tannen.js.jsx'),
  output: {
    path: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx'
      },
    ]
  }
};
