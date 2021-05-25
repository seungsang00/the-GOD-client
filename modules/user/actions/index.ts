import { ActionType } from 'typesafe-actions';
import { getInfoAsync } from './info';
const actions = {
  getInfoAsync,
};

export type UserAction = ActionType<typeof actions>;
