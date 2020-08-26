const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
// const CompressionPlugin = require('compression-webpack-plugin');//制作zip压缩包的插件
const { smart } = require('webpack-merge')

const devConfig = {

  output: {
    filename: "[name].[hash].js",
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, "../src/index.html"),
      filename: '../dist/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3333,
    open: false,
    historyApiFallback: true
  }

}

module.exports = smart(baseConfig, devConfig)