import { goto } from "$app/navigation";
import { ROUTES } from "..";
import type { UserProfile } from "../../open-api";

export function guardUnauthenticatedUserEndpoint(destination: ROUTES, user: UserProfile | undefined) {
  if (!user?.email) {
    goto(destination);
  }
}

export function guardAuthenticatedUserEndpoint(destination: ROUTES, user: UserProfile | undefined) {
  if (user?.email) {
    goto(destination);
  }
}