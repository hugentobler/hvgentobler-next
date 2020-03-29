/*
  Next.js configuration
*/

const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]_[local]_[hash:base64:5]'
  }
})
