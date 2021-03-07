const { nextI18NextRewrites } = require("next-i18next/rewrites");
// const { i18n } = require('./next-i18next.config');
const localeSubpaths = { 
  ko: "ko", en: "en" 
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
