const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 42030,
    historyApiFallback: {
      index: 'index.html',
    },
  },
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
  ],
};

module.exports = merge(commonConfig, devConfig);
