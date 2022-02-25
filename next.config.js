/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? '/find-auto/' : '',
  basePath: process.env.NODE_ENV === "production" ? '/find-auto' : '',
  
}

module.exports = nextConfig

// const debug = process.env.NODE_ENV !== "production";module.exports = {
//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//     }
//   },
//   assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
// }