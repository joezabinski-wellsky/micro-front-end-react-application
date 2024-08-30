import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          // 'static/chunks' is apparently the default location for the filename, although I have no documentation for that
          filename: 'static/chunks/remoteEntry.js',
          name: 'shell',
          remotes: {
            angularEmbedded:"angularEmbedded@http://localhost:3002/remoteEntry.js",
          }
        }),
      );
    }

    return config;
  }
};

export default nextConfig;
