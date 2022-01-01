// CONFIG MULTIPLE PLUGINS CLEANLY
// https://github.com/cyrilwanner/next-compose-plugins
const withPlugins = require('next-compose-plugins')

// CONFIG BUNDLE ANALYZER
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// CONFIG MDX
// https://www.npmjs.com/package/@next/mdx
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// NEXT CONSTANTS
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// CONFIG NEXT
const nextConfig = {
  [PHASE_DEVELOPMENT_SERVER]: {
    env: {
      NEXT_PUBLIC_IS_PROD: false
    }
  },
  [PHASE_PRODUCTION_BUILD]: {
    env: {
      NEXT_PUBLIC_IS_PROD: true
    }
  },
  reactStrictMode: true
}

// const nextConfig = () => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
//   const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
//   console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
//
//
//   return {
//     env: {  NEXT_PUBLIC_IS_PROD: "Hello"},
//     reactStrictMode: true
//   }
// }

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withMDX]
], nextConfig)
