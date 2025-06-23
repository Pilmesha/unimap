'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './locales/en/en.json'
import kaLang from './locales/ka/ka.json'
import ruLang from './locales/ru/ru.json'

const resources: {
  en: { translation: typeof enLang },
  ka: { translation: typeof kaLang },
  ru: { translation: typeof ruLang }
} = {
  en: {
    translation: enLang,
  },
  ka: {
    translation: kaLang,
  },
  ru: {
    translation: ruLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
        useSuspense: false
    }
  });

  export default i18n;