import { browser } from "$app/environment";
import {
  isUserAdmin,
  isUserAuthenticated,
} from "$lib/routes/guards/authentication";
import { goto } from "$app/navigation";
import { ROUTES } from "$lib/routes";
import { BootstrapConfig } from "$lib/bootstrap-config/config";

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

    const isAdmin = await isUserAdmin();
    if (!isAdmin) {
      goto(ROUTES.HOME);
    }
  }

  return {};
};
