import { page } from '$app/stores';
import { DefaultState } from '../common/state';
import type { AppStatus } from './model';

/**
 * AppState class is used to expose app specific variables.
 */
export class AppState extends DefaultState<AppStatus> {

  constructor() {
    super();
    page.subscribe(() => this.setHref(document.location.pathname));
  }
  
  public setHref(href: string) {
    this.setState({ ...this.getSyncState(), href })
  }
}
export const appState = new AppState();

export const APP_STATE = 'appState';