import { getLocale, loadTranslations, setLocale, setLocaleInStorage, t } from "$lib/i18n";
import { logger } from "$lib/analytics";
import { refreshToken } from "$lib/states/authentication";
import { take } from "rxjs";
import { browser } from "$app/environment";
import { fetchConfigurations, configState } from "../lib/states/config";
import { type AppConfig, AppConfigKey, checkStatus } from "../lib/states/status";
import { existsToken } from "../lib/open-api/helpers";
import { toast } from "svelte-sonner";

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

    await fetchConfigurations(import.meta.env.VITE_configUrl || window.configUrl)
    logger.info("page init")
    configState.getConfig<AppConfig>(AppConfigKey).pipe(
      take(1)
    ).subscribe(async appConfig => {
      if (appConfig?.healthCheck) {
        const [message, parameters] = [t.get('common.backend-down'), { duration: 10000000 }];
        let healthStatus = false;
        let retryCount = 0;

        while (!healthStatus && retryCount < 5) {
          try {
            healthStatus = await checkStatus();
            if (!healthStatus && retryCount === 0) {
              toast.error(message, parameters)
            } else if (healthStatus) {
              toast.dismiss()
            }
          } catch {
            if (retryCount === 0) {
              toast.error(message, parameters)
            }
          } finally {
            retryCount += 1;
          }
          if (!healthStatus) {
            await new Promise(resolve => setTimeout(resolve, 15000));
          }
        }
      }
    })

    if (existsToken()) {
      await refreshToken()
    }
    setInterval(() => refreshToken(), 1000 * 60 * 5);
  }
  return {};
}