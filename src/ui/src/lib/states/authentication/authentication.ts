import { DefaultState } from '../common/state';
import type { AuthenticationStatus } from './model';

/**
 * AuthenticationState class is used to manage the state of the authentication.
 */
class AuthenticationState extends DefaultState<AuthenticationStatus> {
  constructor() {
    super();
    this.setState({ authenticated: undefined })
  }

  public setAuthStatus(isAuthenticated: boolean) {
    this.setState({ ...this.getSyncState(), authenticated: isAuthenticated })
  }
}

export type AuthenticationStateInstance = AuthenticationState;

export async function authenticationStateFactory(): Promise<AuthenticationStateInstance> {
  return new AuthenticationState();
}

