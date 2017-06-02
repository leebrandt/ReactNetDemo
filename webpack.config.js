'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'wwwroot'),
  entry: {
    app: './js/app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|public)/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { 
          loader: 'css-loader',
          options: { sourceMaps:true }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ["wwwroot/scss"],
            sourceMaps: true
          }
        }
      ]
    }]
  },
  output: {
    path: path.join(__dirname, 'wwwroot', 'js'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: '[file].map'
  }
};