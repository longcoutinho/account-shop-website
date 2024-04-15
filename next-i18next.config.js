const path = require("path");
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "vi",
    locales: ["en", "vi", "ru"],
    localeDetection: false,
  },
  fallbackLng: {
    default: ["vi"],
  },
  nonExplicitSupportedLngs: true,
  localePath: path.resolve("./public/locales"),
};
