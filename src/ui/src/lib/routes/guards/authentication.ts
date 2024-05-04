import type { UserProfile } from "../../open-api";

export function isUserAuthenticated(user: UserProfile | undefined) {
  return user?.email
}