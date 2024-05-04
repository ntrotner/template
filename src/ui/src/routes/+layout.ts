import { getLocale, loadTranslations, setLocale, setLocaleInStorage, t } from "$lib/i18n";
import { logger } from "$lib/analytics";
import { refreshToken } from "$lib/states/authentication";
import { take } from "rxjs";
import { browser } from "$app/environment";
import { fetchConfigurations, configState } from "../lib/states/config";
import { type AppConfig, AppConfigKey, checkStatus } from "../lib/states/status";
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
        let firstTry = false;

        while (!healthStatus) {
          try {
            healthStatus = await checkStatus();
            if (!healthStatus && !firstTry) {
              toast.error(message, parameters)
            } else if (healthStatus) {
              toast.dismiss()
            }
          } catch {
            if (!firstTry) {
              toast.error(message, parameters)
            }
          } finally {
            firstTry = true;
          }
          if (!healthStatus) {
            await new Promise(resolve => setTimeout(resolve, 15000));
          }
        }
      }
    })
  }
  return {};
}