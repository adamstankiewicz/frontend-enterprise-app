const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 42000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        search: 'search@//localhost:42010/remoteEntry.js',
        dashboard: 'dashboard@//localhost:42020/remoteEntry.js',
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
