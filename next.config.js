/* Modules */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');
const readingTime = require('reading-time');

const { ANALYZE } = process.env;

/* Next constants */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

/* Phases */
// https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // Environment variables
  // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  return withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    fileExtensions: ['mdx'],
    rehypePlugins: [mdxPrism],
    extendFrontMatter: {
      process: (mdxContent) => ({
        readingTime: readingTime(mdxContent),
      }),
    },
  })({
    webpack: (config, {
      buildId, dev, isServer, defaultLoaders, webpack,
    }) => {
      /* Prevent webpack from bundling unnecessary modules into client bundle. */
      if (!isServer) {
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
      }
      /* Use Bundle Analyzer in analysis mode. */
      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
        }));
      }
      /* Return config */
      return config;
    },
    env: {
      IS_PROD: (() => {
        if (isProd) return true;
        return false;
      })(),
    },
  });
};
