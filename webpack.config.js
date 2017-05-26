'use strict';
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const excludeNodeModule = path.resolve(__dirname, './node_modules');
const ES6Path = path.resolve(__dirname, './ES6');

module.exports = {
  entry: {
    main: './main.js',
    literal: ES6Path + '/literal.js'
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
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  }
};
