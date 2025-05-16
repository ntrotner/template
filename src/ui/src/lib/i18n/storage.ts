import { browser } from "$app/environment";

const localeStorage = "locale";

export function setLocaleInStorage(locale: string) {
  if (browser) {
    localStorage.setItem(localeStorage, locale);
  }
}

export function getLocale(): string | null {
  if (browser) {
    return localStorage.getItem(localeStorage);
  }
  return null;
}
