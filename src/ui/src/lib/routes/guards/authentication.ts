import { Injector } from "$lib/injector";
import { filter, firstValueFrom, take } from "rxjs";

export async function isUserAuthenticated() {
  const userAuthenticationState = await firstValueFrom((await Injector.getService('authenticationState')).observable().pipe(
    filter(state => typeof state.authenticated !== 'undefined'),
    take(1)
  ))
  const user = (await Injector.getService('userState')).getSyncState();
  return !!userAuthenticationState.authenticated || !!user?.email;
}
