import ru from './translate/ru.json';
import en from './translate/en.json';
import de from './translate/de.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    de: {
        translation: de,
    },
    ru: {
        translation: ru,
    },
    en: {
        translation: en,
    },
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        resources,
        lng: JSON.parse(localStorage.getItem('language')),
        fallbackLng: 'en',
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: './translate/{{lng}}/translation.json',
        },

    })

export default i18n;