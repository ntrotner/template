import { browser } from "$app/environment";
import { isUserAuthenticated } from "$lib/routes/guards/authentication";
import { goto } from "$app/navigation";
import { ROUTES } from "$lib/routes";
import { firstValueFrom, map } from "rxjs";
import { type AppConfig, AppConfigKey } from "$lib/states/status";
import { Injector } from "$lib/injector";

export const load = async ({ parent }) => {
  if (browser) {
    await parent();

    firstValueFrom((await Injector.getService('configState')).getConfig<AppConfig>(AppConfigKey)
      .pipe(map((config) => config?.user))).then(async isUserEnabled => {
        if (!isUserEnabled) {
          goto(ROUTES.HOME);
        }
        const authenticated = await isUserAuthenticated();
        if (authenticated) {
          goto(ROUTES.HOME);
        }
      })
  }
}
