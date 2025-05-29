import { browser } from "$app/environment";
import { isUserAuthenticated } from "$lib/routes/guards/authentication";
import { goto } from "$app/navigation";
import { ROUTES } from "$lib/routes";
import { BootstrapConfig } from "$lib/bootstrap-config/config";

export const ssr = false;

export const load = async ({ parent }) => {
  if (browser) {
    await parent();

    if (!BootstrapConfig.app.user) {
      goto(ROUTES.HOME);
    }
    const authenticated = await isUserAuthenticated();
    if (!authenticated) {
      goto(ROUTES.HOME);
    }
  }
};
