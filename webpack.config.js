'use strict';
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const excludeNodeModule = path.resolve(__dirname, './node_modules');
// const commonPath = path.resolve(__dirname, './src');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
    // ccc: './src/main2.js'
  },
  output: {
    path: outputPath, // The 'path' must be absolute.
    // publicPath: './',
    filename: '[name]-[hash].js'
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
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  // postcss: [
  //   require('autoprefixer')
  // ],
 //  devServer: {
 // // 以public为根目录提供文件
 //    contentBase: './',
 //    historyApiFallback: true,
 //    // hot: true,
 //    inline: true,
 //    port: '8888'
 //  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      title: 'ddddddddddddddd',
      date: new Date()
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('./[name].css')  // The split 'CSS' will be added to 'index.css'
  ]
};
