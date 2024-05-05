import { browser } from "$app/environment";
import { isUserAuthenticated } from "$lib/routes/guards/authentication";
import { goto } from "$app/navigation";
import { ROUTES } from "$lib/routes";

export const load = async ({ parent }) => {
  if (browser) {
    isUserAuthenticated().then(authenticated => {
      if (!authenticated) {
        goto(ROUTES.HOME);
      }
    })
    await parent();
  }
}