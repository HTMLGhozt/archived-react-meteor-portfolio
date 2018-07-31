const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meteorExternals = require('webpack-meteor-externals');

const clientConfig = {
  entry: ['babel-polyfill', './client/main.js'],
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: join(__dirname, 'imports/ui/static'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [join(__dirname, 'client'), join(__dirname, 'imports')],
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'client/main.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  externals: [
    meteorExternals(),
  ],
};

const serverConfig = {
  entry: './server/main.js',
  target: 'node',
  externals: [
    meteorExternals(),
  ],
};

module.exports = [clientConfig, serverConfig];
