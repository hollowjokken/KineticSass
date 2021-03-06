const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './root/src/scripts/index.js'
    },
    output: {
        path: '/root/dist/scripts',
        filename: 'main.js',
        publicPath: '/root/dist/scripts'
    },
    watch: true,
    devtool: 'eval',
    module: {
        loaders: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "raw-loader"
          },
          {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
          {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: 'svg-inline-loader'
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
