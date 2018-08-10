import originalI18next from 'i18next';
import FetchBackend from 'i18next-fetch-backend';

export const i18next = originalI18next.use(FetchBackend).init({
  fallbackLng: 'en',
  debug: false,
  ns: ['main', 'home', 'services', 'contact'],
  defaultNS: 'home',
  load: 'currentOnly',
  backend: {
    loadPath: 'src/namespaces/{{ns}}/{{lng}}.json'
  }
});