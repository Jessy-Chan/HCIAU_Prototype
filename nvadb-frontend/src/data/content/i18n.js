// Import all content from the locales folders
import * as en from './locales/en/index.js';
import * as ms from './locales/ms/index.js';

export const i18n = {
  defaultLocale: 'en',
  supportedLocales: ['en', 'ms'],
  en: en.en,
  ms: ms.ms
};

export default i18n;
