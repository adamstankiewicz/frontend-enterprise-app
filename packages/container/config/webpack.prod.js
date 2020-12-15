const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        search: 'search@https://frontend-enterprise-search.surge.sh/remoteEntry.js',
        dashboard: 'dashboard@https://frontend-enterprise-dashboard.surge.sh/remoteEntry.js',
      },
      shared: deps,
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, prodConfig);
