import { Observable } from "rxjs";
import { writable, type Subscriber, get, type Unsubscriber } from "svelte/store";

export abstract class DefaultState<U> {
  private state = writable<U | undefined>();

  public setState(newState: U | undefined) {
    this.state.set(newState);
  }

  public getSyncState() {
    return get(this.state);
  }

  public getAsyncState() {
    return this.state;
  }

  public subscribe(run: Subscriber<U | undefined>) {
    return this.state.subscribe(run)
  }

  public observable() {
    let unsub: Unsubscriber;
    const obs = new Observable<U>((subscriber) => {
      unsub = this.state.subscribe((val) => {
        subscriber.next(val);
      });

      return () => {
        unsub();
      };
    });

    return obs;
  }
}