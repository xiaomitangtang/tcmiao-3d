const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base')
// const CompressionPlugin = require('compression-webpack-plugin');//制作zip压缩包的插件
const { smart } = require('webpack-merge')

const buildConfig = {
  mode: "production",
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}
module.exports = smart(baseConfig, buildConfig)