import { ActionType } from 'typesafe-actions';
import { getInfoAsync, updateInfoAsync } from './info';
import {
  getBookmarksAsync,
  updateBookmarkAsync,
  getMyContentAsync,
  getPathAsync,
} from './content';
import { getFollowsAsync } from './follow';
const actions = {
  updateInfoAsync,
  getInfoAsync,
  getBookmarksAsync,
  updateBookmarkAsync,
  getPathAsync,
  getMyContentAsync,
  getFollowsAsync,
};

export type UserAction = ActionType<typeof actions>;
export * from './info';
export * from './content';
export * from './follow';
