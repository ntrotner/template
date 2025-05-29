export interface LoggerConfig {
  url?: string;
}

export interface AppConfig {
  isBackendAware?: boolean;
  user?: boolean;
  adminOnly?: boolean;
  navigation?: "bulky" | "slim" | "none";
  shopOpeningHours?: boolean;
  shopAddress?: boolean;
  onlineShop?: boolean;
}

export interface BootstrapConfig {
  app: AppConfig;
  logger: LoggerConfig;
}

export const BootstrapConfig: BootstrapConfig = {
  ...JSON.parse(import.meta.env.VITE_sharedConfig),
  app: {
    ...JSON.parse(import.meta.env.VITE_sharedConfig).app,
    shopOpeningHours: true,
    shopAddress: true,
    onlineShop: false,
    adminOnly: true,
  },
};
