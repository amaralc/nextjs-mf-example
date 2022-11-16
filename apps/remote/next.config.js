const NextFederationPlugin = require('@module-federation/nextjs-mf');
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './pages/index': './pages/index.tsx',
          './pages-map': './pages-map.js',
          './components/HeroSection':'./components/HeroSection.tsx'
        },
        remotes: {},
        shared: {
          '@mui/material': {
            singleton: true,
            requiredVersion: false
          },
          '@emotion/react': {
            singleton: true,
            requiredVersion: false
          }
        },
        extraOptions:{
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
