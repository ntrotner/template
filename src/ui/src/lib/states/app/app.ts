import { browser } from '$app/environment';
import { page } from '$app/stores';
import { DefaultState } from '../common/state';
import type { AppStatus } from './model';

/**
 * AppState class is used to expose app specific variables.
 */
export class AppState extends DefaultState<AppStatus> {

  constructor() {
    super();
    this.setLoaded(false);

    if (browser) {
      page.subscribe(() => this.setHref(document.location.pathname));

      this.setWidth(document.documentElement.clientWidth);
      this.setHeight(document.documentElement.clientHeight);
      addEventListener("resize", () => {
        this.setWidth(document.documentElement.clientWidth);
        this.setHeight(document.documentElement.clientHeight);
      });
    }
  }
  
  public setHref(href: string) {
    this.setState({ ...this.getSyncState(), href })
  }

  public setWidth(width: number) {
    const mobile = width < 640;
    this.setState({ ...this.getSyncState(), width, mobile })
  }

  public setHeight(height: number) {
    this.setState({ ...this.getSyncState(), height })
  }

  public setLoaded(loaded: boolean) {
    this.setState({ ...this.getSyncState(), loaded })
  }
}
export const appState = new AppState();

export const APP_STATE = 'appState';