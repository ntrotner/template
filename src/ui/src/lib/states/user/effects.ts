import { Injector } from "$lib/injector";
import { type Success, type ModelError } from "$lib/open-api";

/**
 * Reset the password of the user.
 * @param {string} email - The email of the user.
 */
export async function resetPasswordOfUser(email: string) {
  (await Injector.getService('userState')).setState(undefined);
  
  const userApi = await Injector.getService('userApi');
  return userApi.passwordResetPost({
    passwordReset: { email }
  })
}

/**
 * Change the password of the user.
 * @param {string} currentPassword - The current password of the user.
 * @param {string} newPassword - The new password of the user.
 * @returns {Promise<Success>} - A promise that resolves to a Success object.
 */
export async function changePasswordOfUser(currentPassword: string, newPassword: string): Promise<Success & ModelError | undefined> {
  const userApi = await Injector.getService('userApi'); 
  try {
    return userApi.changePasswordPost({
      changePassword: {
        currentPassword,
        newPassword
      }
    });
  } catch (e: unknown) {
    let errorResponse: ModelError | undefined = undefined;
    if (e instanceof Error) {
      errorResponse = await (e as any).response.json() as ModelError;
    }
    return errorResponse;
  }
}

/**
 * Change the email of the user.
 * @param {string} currentEmail- The current email of the user.
 * @param {string} newEmail - The new email of the user.
 * @returns {Promise<Success>} - A promise that resolves to a Success object.
 */
export async function changeEmailOfUser(currentEmail: string, newEmail: string): Promise<Success & ModelError | undefined> {
  const userApi = await Injector.getService('userApi');
  try {
    const response = await userApi.changeEmailPost({
      changeEmail: {
        currentEmail,
        newEmail
      }
    });
    await fetchUserProfile();
    return response;
  } catch (e: unknown) {
    let errorResponse: ModelError | undefined = undefined;
    if (e instanceof Error) {
      errorResponse = await (e as any).response.json() as ModelError;
    }
    return errorResponse;
  }
}

/**
 * Fetch the profile of the user.
 */
export async function fetchUserProfile() {
  const userApi = await Injector.getService('userApi');
  const userProfile = await userApi.profileGet();
  (await Injector.getService('userState')).setState(userProfile);
}
