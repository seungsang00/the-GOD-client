import { ActionType } from 'typesafe-actions';

import { createAsync } from './create';
import { updateAsync } from './update';
import {} from './delete';

const actions = { updateAsync, createAsync };

export type ContentAction = ActionType<typeof actions>;
export * from './create';
export * from './update';
export * from './delete';
