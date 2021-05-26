import { ActionType } from 'typesafe-actions';

import { createAsync } from './create';
import { updateAsync } from './update';
import { getContentAsync, getContentListAsync } from './read';
import {} from './delete';

const actions = {
  getContentAsync,
  getContentListAsync,
  updateAsync,
  createAsync,
};

export type ContentAction = ActionType<typeof actions>;

export * from './create';
export * from './update';
export * from './delete';
