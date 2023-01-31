import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/translation.json'
import km from './km/translation.json'

import LanguageDetector from 'i18next-browser-languagedetector'

export const resources = {
  en: {
    translation: en,
  },
  km: {
    translation: km,
  },
}

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {},
  })

export default i18next.t
