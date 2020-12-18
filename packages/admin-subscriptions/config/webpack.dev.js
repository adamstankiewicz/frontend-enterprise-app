const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 42050,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'adminSubscriptions',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminSubscriptionsApp': './src/bootstrap',
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
