import { DefaultState } from '../common/state';
import type { Health } from '$lib/open-api';

/**
 * StatusState class is used to manage the state of the backend status.
 */
export class StatusState extends DefaultState<Health> {
}
export const statusState = new StatusState();

export const STATUS_STATE = 'statusState';