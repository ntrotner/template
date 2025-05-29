export interface LoggerConfig {
  url?: string;
}

export interface AppConfig {
  isBackendAware?: boolean;
  user?: boolean;
  navigation?: "bulky" | "slim" | "none";
}

export interface BootstrapConfig {
  app: AppConfig;
  logger: LoggerConfig;
}

export const BootstrapConfig: BootstrapConfig = {
  ...JSON.parse(import.meta.env.VITE_sharedConfig),
};
