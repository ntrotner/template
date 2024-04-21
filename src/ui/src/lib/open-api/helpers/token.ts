import type { FetchParams, Middleware, RequestContext } from "..";

const AuthorizationToken = 'authToken';

export function setToken(token: string | null) {
  if (!token) {
    return;
  }
  token = token.replace('Bearer ', '')
  localStorage.setItem(AuthorizationToken, token);
}

export function readToken(): string | null {
  return localStorage.getItem(AuthorizationToken);
}

export function clearToken() {
  localStorage.removeItem(AuthorizationToken);
}

export function existsToken(): boolean {
  return !!localStorage.getItem(AuthorizationToken);
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