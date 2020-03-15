import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from '../locales/en.json';
import jaJson from '../locales/ja.json';

const initI18n = () => {
  i18n.use(initReactI18next).init({
    debug: true,
    resources: {
      en: { translation: enJson },
      ja: { translation: jaJson },
    },
    lng: 'ja',
    fallbackLng: 'en',
  });
};

export default initI18n;
