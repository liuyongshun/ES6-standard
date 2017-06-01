'use strict';
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const excludeNodeModule = path.resolve(__dirname, './node_modules');
const commonPath = path.resolve(__dirname, './src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: commonPath + '/main.js',
    literal: commonPath + '/ES6/literal.js'
  },
  output: {
    path: outputPath, // The path must be absolute path.
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: excludeNodeModule, // The path must be absolute path.
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', {
                module: false
              }]]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'),  // if the formatter is not accord with eslint,it will throw error;
              emitError: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/index.css')
  ]
};
