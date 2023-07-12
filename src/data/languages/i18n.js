import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import idTranslation from './id.json';

// Inisialisasi i18next
i18n.use(initReactI18next).init({
  // Pilih bahasa default
  lng: 'en',
  // Daftar terjemahan yang tersedia
  resources: {
    en: {
      translation: enTranslation
    },
    id: {
      translation: idTranslation
    }
  },
  // Menggunakan deteksi bahasa browser sebagai fallback
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;