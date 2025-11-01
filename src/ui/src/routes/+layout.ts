import { browser } from "$app/environment";
import { BootstrapConfig } from "$lib/bootstrap-config/config";
import { getLocale, setLocaleInStorage } from "$lib/i18n/storage";
import { loadTranslations, setLocale, t } from "$lib/i18n/translations";
import { appState } from "$lib/states/app/app";
import { toast } from "svelte-sonner";

export const prerender = true;
export const ssr = true;
export const trailingSlash = "always";

async function setupSSRLocalization() {
  const locale = "en";
  await setLocale(locale);
  await loadTranslations(locale);
}

async function setupLocalization() {
  let locale = getLocale();
  if (!locale) {
    locale = "en";
    setLocaleInStorage(locale);
  }
  await setLocale(locale);
  document.documentElement.lang = locale;
  await loadTranslations(locale);
  appState.setLocalizationLoaded(true);
}

async function checkBackendStatus() {
  let healthStatus = false;
  let firstTry = false;

  while (!healthStatus) {
    try {
      const { checkStatus } = await import("../lib/states/status");
      healthStatus = await checkStatus();
      if (!healthStatus && !firstTry) {
        toast.error(t.get("common.backend-down"), { duration: 15000 });
      } else if (healthStatus && !firstTry) {
        toast.dismiss();
      }
    } catch {
      if (!firstTry) {
        toast.error(t.get("common.backend-down"), { duration: 15000 });
      }
    } finally {
      firstTry = true;
    }
    if (!healthStatus) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

async function setupToken() {
  const { refreshToken } = await import("../lib/states/authentication/effects");
  const { TOKEN_REFRESH_IN_MS } = await import("../lib/open-api/helpers");
  setInterval(() => refreshToken(), TOKEN_REFRESH_IN_MS);
  refreshToken();
}

export const load = async () => {
  if (browser) {
    const localizationPromise = setupLocalization();

    if (BootstrapConfig.app.isBackendAware) {
      checkBackendStatus();
    }

    if (BootstrapConfig.app.user) {
      setupToken();
    } else {
      appState.setApiLoaded(true);
    }
    await localizationPromise;
  } else {
    await setupSSRLocalization();
  }

  return {};
};
