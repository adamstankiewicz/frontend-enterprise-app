const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production',
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
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);
