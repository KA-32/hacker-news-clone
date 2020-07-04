const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(new CompressionPlugin({
    deleteOriginalAssets: true
  }));

  return config;
};
