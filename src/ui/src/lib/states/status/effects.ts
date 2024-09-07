import { Injector } from "$lib/injector";
import { type Health } from "$lib/open-api";

/**
 * Contact backend
 * @returns Promise<boolean> - Contact backend and check if connection is stable.
 */
export async function checkStatus() {
  const statusApi = await Injector.getService('statusApi'); 
  const statusState = await Injector.getService('statusState');

  try {
    const health = await statusApi.health({signal: AbortSignal.timeout(5000)});
    statusState.setState(health);
    return (Object.keys(health) as (keyof Health)[]).every((system) => !!health[system]);
  } catch {
    statusState.setState({db: false, server: false});
    return false;
  }
}
