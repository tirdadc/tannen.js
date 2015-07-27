var path = require('path')
  , ExtractTextPlugin = require("extract-text-webpack-plugin")
  , webpack = require('webpack');

module.exports = {
  entry: {
    tannen: path.resolve(__dirname, 'src/Tannen.js'),
    example: path.resolve(__dirname, 'example/example')
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
