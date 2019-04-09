const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // another: './src/another-module.js',
    // print: './src/print.js'
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  // plugins: [
  //   // new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     title: 'Output Management'
  //   }),
  //   new config.optimize.splitChunks({
  //     name: 'common'
  //   })
  //   // new webpack.NamedModulesPlugin(),
  //   // new webpack.HotModuleReplacementPlugin()
  // ],
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module: {
  //   rules: [{
  //       test: /\.css$/,
  //       use: ['style-loader','css-loader']
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: [
  //         'csv-loader'
  //       ]
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: [
  //         'xml-loader'
  //       ]
  //     }
  //   ]
  // },
  optimization: {
    usedExports: true
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  }
}