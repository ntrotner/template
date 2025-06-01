import { AdminApi, type MetadataItem } from "$lib/open-api";
import { metadataState } from "./metadata";

const adminApi = new AdminApi();

export async function fetchMetadata(): Promise<void> {
  try {
    metadataState.setLoading(true);
    const items = await adminApi.adminGetMetadata();
    metadataState.setItems(items);
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    metadataState.setError("Failed to fetch metadata");
  }
}

export async function updateMetadata(items: MetadataItem[]): Promise<void> {
  try {
    metadataState.setLoading(true);
    await adminApi.adminChangeMetadata({ metadataItem: items });
    metadataState.setItems(items);
  } catch (error) {
    console.error("Failed to update metadata:", error);
    metadataState.setError("Failed to update metadata");
  }
}

export async function updateShopSettings(
  openingHours: string,
  address: string,
  closedDays: string,
): Promise<void> {
  const items: MetadataItem[] = [
    { key: "openingHours", value: openingHours, adminOnly: false },
    { key: "address", value: address, adminOnly: false },
    { key: "closedDays", value: closedDays, adminOnly: false },
  ];

  await updateMetadata(items);
}
