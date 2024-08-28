const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => { 
                  webpackConfig.plugins = [
                    ...webpackConfig.plugins,
                    new ModuleFederationPlugin({
                      name: "app",
                      remotes: {
                        angularEmbedded:"angularEmbedded@http://localhost:3002/remoteEntry.js",
                      }
                    }),
                  ] 
                  return webpackConfig;
                }
            },
        }
    ]
};