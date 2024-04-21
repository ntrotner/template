import { getLocale, loadTranslations, setLocale, setLocaleInStorage } from "$lib/i18n/index";
import { logger } from "$lib/analytics";
import { configState, fetchConfigurations } from "$lib/states/config";
import { AppConfigKey, checkStatus, type AppConfig } from "$lib/states/status";
import { take } from "rxjs";
import { browser } from "$app/environment";
import { refreshToken } from "$lib/states/authentication";

export const prerender = true;
export const ssr = false;

export const load = async () => {
  if (browser) {
    let locale = getLocale();
    if (!locale) {
      locale = 'en';
      setLocaleInStorage(locale);
    }
    setLocale(locale);
      document.documentElement.lang = locale;
      await loadTranslations(locale);

    await fetchConfigurations(window.configUrl)
    logger.info("page init")
    configState.getConfig<AppConfig>(AppConfigKey).pipe(
      take(1)
    ).subscribe(appConfig => appConfig?.healthCheck ? checkStatus() : null)

    await refreshToken()
    setInterval(() => refreshToken(), 1000 * 60 * 5);
  }
  return {};
}