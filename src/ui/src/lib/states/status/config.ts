export interface AppConfig {
  isBackendAware?: boolean,
  user?: boolean
}

export const AppConfigKey = 'app';

export const defaultAppConfig: { [AppConfigKey]: AppConfig } = {
  [AppConfigKey]: {isBackendAware: true, user: true}
}
