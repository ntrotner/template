import { getLocale, loadTranslations, setLocale, setLocaleInStorage } from "$lib/i18n/index";

export const load = async () => {
  let locale = getLocale();
  if (!locale) {
    locale = 'en';
    setLocaleInStorage(locale);
  }
  setLocale(locale);
  await loadTranslations(locale);
  return {};
}