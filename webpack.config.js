'use strict';
var path = require('path');
var outputPath = path.resolve(__dirname, './dist');
var excludeNodeModule = path.resolve(__dirname, './node_modules');

module.exports = {
  entry: './main.js',
  output: {
    path: outputPath, // The path must be absolute path.
    filename: 'bundle.js'
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
      }
    ]
  }
};
