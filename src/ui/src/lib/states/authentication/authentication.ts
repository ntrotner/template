import { DefaultState } from "../common/state";
import type { AuthenticationStatus } from "./model";

/**
 * AuthenticationState class is used to manage the state of the authentication.
 */
export class AuthenticationState extends DefaultState<AuthenticationStatus> {
  constructor() {
    super();
    this.setState({ authenticated: undefined });
  }

  public setAuthStatus(isAuthenticated: boolean) {
    this.setState({ ...this.getSyncState(), authenticated: isAuthenticated });
  }
}
export const authenticationState = new AuthenticationState();

export const AUTHENTICATION_STATE = "authState";
