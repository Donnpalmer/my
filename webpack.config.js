const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { webpack } = require('webpack');
const $ = require('jquery');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
  },
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
          filename: 'index.html',  
          template: './index.html'
        }),
        new HTMLWebpackPlugin({
          filename: 'products.html',  
          template: './products.html'
        }),
        new HTMLWebpackPlugin({
          filename: 'about.html',  
          template: './about.html'
        }),
        new HTMLWebpackPlugin({
          filename: 'contacts.html',  
          template: './contacts.html'
        }),
        new HTMLWebpackPlugin({
          filename: 'news.html',  
          template: './news.html'
        }),
        new HTMLWebpackPlugin({
          filename: 'newspage1.html',  
          template: './newspage1.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(?:ico|png|jpg|svg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff(2)?|eot|ttf|woff|woff2|eot)$/,
            type: 'asset/inline',
          }
        ],
      }
};