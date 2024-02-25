import { UserApi, type Success } from "$lib/open-api";
import { userState } from "./user";

/**
 * Reset the password of the user.
 * @param {string} email - The email of the user.
 */
export function resetPasswordOfUser(email: string) {
  userState.setState(undefined);
  
  const userApi = new UserApi();
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
export function changePasswordOfUser(currentPassword: string, newPassword: string): Promise<Success> {
  const userApi = new UserApi();
  return userApi.changePasswordPost({
    changePassword: {
      currentPassword,
      newPassword
    }
  });
}

/**
 * Fetch the profile of the user.
 */
export async function fetchUserProfile() {
  const userApi = new UserApi();
  const userProfile = await userApi.profileGet();
  userState.setState(userProfile);
}