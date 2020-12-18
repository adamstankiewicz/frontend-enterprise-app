const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 42040,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'adminHome',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminHomeApp': './src/bootstrap',
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
