const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");
module.exports = new NextI18Next({
  defaultLanguage: "ko",
  otherLanguages: ["en"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  defaultNS: "common",
  browserLanguageDetection: false,
  serverLanguageDetection: false,
});

/*
 * How to change locale(language)
 * i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}
 */