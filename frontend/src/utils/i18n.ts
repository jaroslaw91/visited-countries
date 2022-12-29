import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from 'locales/en.json'
import pl from 'locales/pl.json'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: en,
	},
	pl: {
		translation: pl,
	},
}

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		detection: { lookupLocalStorage: 'language' },
	})
