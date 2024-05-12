import { StatusApi, type Health } from "$lib/open-api";
import { statusState } from "./status";

/**
 * Contact backend
 * @returns Promise<boolean> - Contact backend and check if connection is stable.
 */
export async function checkStatus() {
  const statusApi = new StatusApi();

  try {
    const health = await statusApi.health({signal: AbortSignal.timeout(5000)});
    statusState.setState(health);
    return (Object.keys(health) as (keyof Health)[]).every((system) => !!health[system]);
  } catch {
    statusState.setState({db: false, server: false});
    return false;
  }
}