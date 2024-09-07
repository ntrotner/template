import type { FetchParams, Middleware, RequestContext } from "../runtime";

export const TOKEN_VALID_IN_MS = 5 * 60 * 1000;
export const TOKEN_REFRESH_IN_MS = 2 * 60 * 1000;

const AuthorizationToken = 'authToken';
const AuthorizationTokenTime = 'authTokenTime';

export function setToken(token: string | null) {
  if (!token) {
    return;
  }
  token = token.replace('Bearer ', '')
  localStorage.setItem(AuthorizationToken, token);
  localStorage.setItem(AuthorizationTokenTime, new Date().getTime().toString())
}

export function readToken(): string | null {
  return localStorage.getItem(AuthorizationToken);
}

export function clearToken() {
  localStorage.removeItem(AuthorizationToken);
  localStorage.removeItem(AuthorizationTokenTime);
}

export function existsToken(): boolean {
  return !!localStorage.getItem(AuthorizationToken);
}

export function isTokenTimeValid(): boolean {
  const savedDate = localStorage.getItem(AuthorizationTokenTime);
  if (!savedDate) {
    return false;
  }

  const validFrom = new Date().getTime() - TOKEN_VALID_IN_MS;
  return new Date(Number(savedDate)).getTime() > validFrom;
}

export class ExtendToken implements Middleware {
  pre?(context: RequestContext): Promise<FetchParams | void> {
    const savedToken = readToken();
    if (savedToken && context.init?.headers) {
      const key = 'Authorization';
      const value = `Bearer ${savedToken}`;
      if (Array.isArray(context.init.headers)) {
        context.init.headers.push([key, value]);
      } else if (context.init.headers instanceof Headers) {
        context.init.headers.set(key, value);
      } else {
        context.init.headers[key] = value;
      }
    }
    return new Promise((res) => res(context));
  }
}
