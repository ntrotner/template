import { type Config } from './model';
import { configState } from './config';

/**
 * Fetches the application configurations from a JSON file and updates the state.
 * 
 * This function sends a GET request to the specified path to fetch the configuration JSON file. 
 * It then updates the configState with the received configurations.
 * 
 * @async
 * @function
 */
export async function fetchConfigurations(url?: string) {
  if (!url) {
    return;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return;
    }

    const config: Record<string, Config> = await response.json();
    configState.setConfigMap(config);
  } catch (error) {
    console.error('Failed to fetch configurations: ', error);
  }
}