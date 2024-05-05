export interface AppConfig {
  healthCheck?: boolean
  showLoadingIndicator?: boolean
}

export const AppConfigKey = 'app';

export const defaultAppConfig: { [AppConfigKey]: AppConfig } = {
  [AppConfigKey]: {healthCheck: true, showLoadingIndicator: true}
}
