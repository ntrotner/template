import { StatusApi } from "$lib/open-api";
import { statusState } from "./status";

/**
 * Contact backend
 * @returns Promise<boolean> - Contact backend and check if connection is stable.
 */
export async function checkStatus() {
  const statusApi = new StatusApi();

  try {
    const health = await statusApi.health();
    statusState.setState(health);
    return true;
  } catch {
    statusState.setState({db: false, server: false});
    return false;
  }
}