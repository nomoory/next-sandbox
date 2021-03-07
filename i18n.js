const NextI18Next = require("next-i18next").default;
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const localeSubpaths = { 
  ko: "ko", en: "en" 
};
// const localeSubpaths = {ko: "ko", en: "en"};
const path = require("path");
const nextI18Next = new NextI18Next({
  defaultLanguage: "ko",
  otherLanguages: ["en", "ko"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  defaultNS: "common",
  // i18n: {
  //   locales: ["en", "ko"],
  //   defaultLocale: "ko",
  // },
});

/*
 * How to change locale(language)
 * i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}
 */

module.exports = {
  i18n: nextI18Next.i18n,
  appWithTranslation: nextI18Next.appWithTranslation,
  withTranslation: nextI18Next.withTranslation,
  Link: nextI18Next.Link,
  // useTranslation: nextI18Next.useTranslation,
};
