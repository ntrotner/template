import { DefaultState } from '../common/state';
import type { Health } from '$lib/open-api';

/**
 * StatusState class is used to manage the state of the backend status.
 */
class StatusState extends DefaultState<Health> {
}

export type StatusStateInstance = StatusState;

export async function statusStateFactory(): Promise<StatusStateInstance> {
  return new StatusState();
}

