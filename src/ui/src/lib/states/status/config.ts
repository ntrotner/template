export interface AppConfig {
  healthCheck?: boolean
}

export const AppConfigKey = 'app';

export const defaultAppConfig: { [AppConfigKey]: AppConfig } = {
  [AppConfigKey]: {healthCheck: true}
}
