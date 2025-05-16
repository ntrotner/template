import { DefaultState } from "../common/state";
import type { UserProfile } from "$lib/open-api";

/**
 * UserState class is used to manage the state of the user.
 */
export class UserState extends DefaultState<UserProfile> {}
export const userState = new UserState();

export const USER_STATE = "userState";
