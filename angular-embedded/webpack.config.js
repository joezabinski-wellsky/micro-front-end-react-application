const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  // Makes remote.entry.js loadable through Webpack
  output: {
    publicPath: "auto",  // documentation says this is the default, but it's not
    scriptType:'text/javascript'
  },
  // Webpack apparently optimizes away needed Webpack.require functions without the below setting
  optimization: {
    runtimeChunk: false // documentation says this is the default, but it's not
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "angularEmbedded",
        filename: "remoteEntry.js",
        exposes: {
            './angularModule':'./src/loadApp.ts'
        }
    }),
  ],
};
