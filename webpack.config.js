var path = require('path');
var webpack = require('webpack');
var outputPath = path.resolve(__dirname, './dist');
var excludeNodeModule =  path.resolve(__dirname, './node_modules');
module.exports = {
  entry: './main.js',
  output: {
    path: outputPath,  // The path must be absolute path.
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: excludeNodeModule,  // The path must be absolute path.
        use: [{
            loader: 'babel-loader',
            options: {
              presets: [ ['es2015', {module: false}] ]
            }
        }]
      }
    ]
  }
};
