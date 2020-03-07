const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin');//制作zip压缩包的插件


module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "[name].[hash].js",
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /.js$/, loader: "babel-loader"
      }
    ]
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
    open: true,
    historyApiFallback: true
  }

}