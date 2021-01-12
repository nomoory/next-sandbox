const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");
const nextI18Next = new NextI18Next({
  defaultLanguage:'ko',
  otherLanguages: ["en"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  defaultNS: 'common',
});

/*
 * How to change locale(language)
 * i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
 */

module.exports = {
  i18n: nextI18Next.i18n,
  appWithTranslation: nextI18Next.appWithTranslation,
  withTranslation: nextI18Next.withTranslation,
  Link: nextI18Next.Link,
};
