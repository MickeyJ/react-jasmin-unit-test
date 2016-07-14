const webpack = require('webpack');

const config = {
  entry: './test/ArtistSpec',
  output: {
    path: './test',
    filename: 'spec.js'
  },
  devServer: {
    contentBase: './test',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exlcude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;