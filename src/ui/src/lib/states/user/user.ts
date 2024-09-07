import { DefaultState } from '../common/state';
import type { UserProfile } from '$lib/open-api';

/**
 * UserState class is used to manage the state of the user.
 */
class UserState extends DefaultState<UserProfile> {
}

export type UserStateInstance = UserState;

export async function userStateFactory(): Promise<UserStateInstance> {
  return new UserState();
}

