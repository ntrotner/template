import { getLocale, loadTranslations, setLocale, setLocaleInStorage } from "$lib/i18n";
import { logger } from "$lib/analytics";
import { AppConfigKey, checkStatus, type AppConfig, configState, fetchConfigurations, refreshToken } from "$lib/states";
import { take } from "rxjs";
import { browser } from "$app/environment";

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