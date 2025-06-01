import { DefaultState } from "../common/state";
import type { MetadataItem } from "$lib/open-api";
import type { MetadataState, ShopMetadata } from "./model";

/**
 * MetadataState class is used to manage the state of metadata items like opening hours and address.
 */
export class MetadataStateMgr extends DefaultState<MetadataState> {
  constructor() {
    super();
    this.setState({
      items: [],
      loading: false,
      error: undefined,
    });
  }

  public setLoading(loading: boolean) {
    const currentState = this.getSyncState() || {};
    this.setState({ ...currentState, loading });
  }

  public setError(error?: string) {
    const currentState = this.getSyncState() || {};
    this.setState({ ...currentState, error, loading: false });
  }

  public setItems(items: MetadataItem[]) {
    const currentState = this.getSyncState() || {};
    this.setState({ ...currentState, items, loading: false, error: undefined });
  }

  public updateItem(key: string, value: string, adminOnly?: boolean) {
    const currentState = this.getSyncState() || {};
    const items = currentState.items || [];

    const existingIndex = items.findIndex((item) => item.key === key);
    const newItem: MetadataItem = { key, value, adminOnly };

    let updatedItems: MetadataItem[];
    if (existingIndex >= 0) {
      updatedItems = [...items];
      updatedItems[existingIndex] = newItem;
    } else {
      updatedItems = [...items, newItem];
    }

    this.setState({ ...currentState, items: updatedItems });
  }

  public getShopMetadata(): ShopMetadata {
    const items = this.getSyncState()?.items || [];
    return {
      openingHours: items.find((item) => item.key === "openingHours")?.value,
      address: items.find((item) => item.key === "address")?.value,
      closedDays: items.find((item) => item.key === "closedDays")?.value,
    };
  }

  public setOpeningHours(value: string) {
    this.updateItem("openingHours", value, true);
  }

  public setClosedDays(value: string) {
    this.updateItem("closedDays", value, true);
  }

  public setAddress(value: string) {
    this.updateItem("address", value, true);
  }
}

export const metadataState = new MetadataStateMgr();

export const METADATA_STATE = "metadataState";
