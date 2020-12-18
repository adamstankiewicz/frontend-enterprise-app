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
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminApp': './src/bootstrap',
      },
      remotes: {
        'adminHome': 'adminHome@//localhost:42040/remoteEntry.js',
      },
      shared: deps,
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);
