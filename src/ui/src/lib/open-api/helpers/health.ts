import { filter, firstValueFrom } from "rxjs";
import type { Middleware, RequestContext, FetchParams } from "..";
import { statusState } from "../../states/status";

export class AwaitBackendHealth implements Middleware {
  async pre?(context: RequestContext): Promise<FetchParams | void> {
    if (context.url.includes('/health')) {
      return context;
    }
    await firstValueFrom(statusState.observable().pipe(
      filter(health => !!health && !!health.db && !!health.server)
    ));

    return context;
  }
}