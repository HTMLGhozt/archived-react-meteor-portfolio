const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meteorExternals = require('webpack-meteor-externals');
const clientConfig = {
    entry: './client/main.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './client/main.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    externals: [
      meteorExternals()
    ]
};
const serverConfig = {
    entry: [
        './server/main.js'
    ],
    target: 'node',
    externals: [
      meteorExternals()
    ]
};
module.exports = [clientConfig, serverConfig];