const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = { 
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // locales: localeSubpaths,
  // defaultLocale: 'ko',
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
