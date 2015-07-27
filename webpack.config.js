var path = require('path')
  , webpack = require('webpack');

module.exports = {
  entry: {
    tannen: [path.resolve(__dirname, 'src/Tannen.jsx')],
    example: path.resolve(__dirname, 'app/main')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
