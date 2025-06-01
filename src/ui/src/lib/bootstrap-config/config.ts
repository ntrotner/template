export interface LoggerConfig {
  url?: string;
}

export interface AppConfig {
  isBackendAware?: boolean;
  user?: boolean;
  adminOnly?: boolean;
  navigation?: "bulky" | "slim" | "none";
  seo?: {
    metadata?: boolean;
  };
  cookieConsentScript?: string;
}

export interface ShopConfig {
  shopHeader?: boolean;
  shopOpeningHours?: boolean;
  shopAddress?: boolean;
  onlineShop?: boolean;
  shopContact?: boolean;
  seo?: {
    structuredData?: boolean;
    openGraph?: boolean;
    twitter?: boolean;
  };
}

export interface BootstrapConfig {
  app: AppConfig;
  logger: LoggerConfig;
  shop: ShopConfig;
}

export const BootstrapConfig: BootstrapConfig = {
  ...JSON.parse(import.meta.env.VITE_sharedConfig),
};
