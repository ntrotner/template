import type { MetadataItem } from "$lib/open-api";

export interface MetadataState {
  items?: MetadataItem[];
  loading?: boolean;
  error?: string;
}

export interface ShopMetadata {
  openingHours?: string;
  address?: string;
  closedDays?: string;
}
