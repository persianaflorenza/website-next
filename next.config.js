// module.exports = {
//   target: 'serverless',
//   images: {
//     domains: ['www.datocms-assets.com'],
//   },
//   i18n: {
//     locales: ["pt-BR"],
//     defaultLocale: "pt-BR",
//   },
//   future: { webpack5: true },
//   webpack: (config) => {
//     // Unset client-side javascript that only works server-side
//     config.resolve.fallback = { fs: false, module: false };

//     config.module.rules.push({
//       test: /\.(graphql|gql)$/,
//       exclude: /node_modules/,
//       loader: 'graphql-tag/loader',
//     });

//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };
// next.config.js
const withImages = require('next-images');
module.exports = withImages({
  target: 'serverless',
  images: {
    domains: ['www.datocms-assets.com'],
  },
  feature: { webpack5: true },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
});
