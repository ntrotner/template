import { AuthenticationApi } from "$lib/open-api";
import { fetchUserProfile, userState } from "../user";
import { authenticationState } from ".";
import { filter, firstValueFrom } from "rxjs";
import { statusState } from "../status";

/**
 * Login the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the login.
 */
export async function login(email: string, password: string) {
  const authApi = new AuthenticationApi();

  await firstValueFrom(statusState.observable().pipe(
    filter(health => !!health.db && !!health.server)
  ));
  try {
    await authApi.loginPost({
      userLogin: {
        email,
        password
      }
    });
    await fetchUserProfile();
    authenticationState.setAuthStatus(true)
    return true;
  } catch {
    userState.setState(undefined);
    authenticationState.setAuthStatus(false);
    return false;
  }
}

/**
 * Register the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the registration.
 */
export async function register(email: string, password: string) {
  const authApi = new AuthenticationApi();

  await firstValueFrom(statusState.observable().pipe(
    filter(health => !!health.db && !!health.server)
  ));
  try {
    await authApi.registerPost({
      userRegistration: {
        email,
        password
      }
    });
    await fetchUserProfile();
    authenticationState.setAuthStatus(true);
    return true;
  } catch {
    userState.setState(undefined);
    authenticationState.setAuthStatus(false)
    return false;
  }
}

/**
 * Logout the user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the logout.
 */
export async function logout() {
  const authApi = new AuthenticationApi();
  let requestFailed = false;

  await firstValueFrom(statusState.observable().pipe(
    filter(health => !!health.db && !!health.server)
  ));
  try {
    await authApi.logoutPost();
  } catch {
    requestFailed = true;
  }

  userState.setState(undefined);
  authenticationState.setAuthStatus(false);
  return !requestFailed;
}

/**
 * Refresh token for authentication.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating the success of the token refresh.
 */
export async function refreshToken() {
  const authApi = new AuthenticationApi();

  await firstValueFrom(statusState.observable().pipe(
    filter(health => !!health.db && !!health.server)
  ));
  try {
    await authApi.refreshTokenPost();
    await fetchUserProfile();
    authenticationState.setAuthStatus(true);
    return true;
  } catch {
    userState.setState(undefined);
    authenticationState.setAuthStatus(false);
    return false;
  }
}