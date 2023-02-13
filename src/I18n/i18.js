import i18next from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { EN } from "./locales/en";
import { ES } from "./locales/es";

// the resources is used to render trans files EN is the default
const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
};

// Seting the lan in to localStorege direclty with the help of LanguageDetector

const DETECTION_OPTIONS = {
  order: ["localStorage"],
  caches: ["localStorage"],
};

const i18n = i18next.createInstance();

// here we are seeting up the default lang
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

export default i18n;
