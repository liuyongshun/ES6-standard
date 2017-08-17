'use strict';
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const excludeNodeModule = path.resolve(__dirname, './node_modules');
const commonPath = path.resolve(__dirname, './src');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const WebpackDevServer = require("webpack-dev-server");

module.exports = {
  entry: {
    main: ['babel-polyfill', commonPath + '/main.js']
  },
  output: {
    path: outputPath, // The 'path' must be absolute.
    publicPath: 'http://localhost:8088/dist/',
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
              formatter: require('eslint-friendly-formatter'),  // if the format is not accord with eslint standard,it will throw error;
              emitError: true // Determine whether emit a mistake
            }
          }
        ]
      },
      {
        test: /\.styl$/,  // compile 'stylus' into 'css'
        use: ExtractTextPlugin.extract({   // separate css that was compiled
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      {
        test: /\.css$/,  // handle css
        use: ExtractTextPlugin.extract({  // separate css
          use: ['css-loader']
        })
      }
    ]
  },
  devServer: {
 // 以public为根目录提供文件
    historyApiFallback: true,
    contentBase: './',
    quiet: false, // 控制台中不输出打包的信息
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300
    },
    port: '8088'
  },
  plugins: [
    new ExtractTextPlugin('./[name].css')  // The split 'CSS' will be added to 'index.css'
  ]
};
