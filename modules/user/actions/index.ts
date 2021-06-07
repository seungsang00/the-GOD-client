import { ActionType } from 'typesafe-actions';
import {
  getInfoAsync,
  updateInfoAsync,
  updateProfileImageAsync,
  updateUserNameAsync,
} from './info';
import {
  getBookmarksAsync,
  updateBookmarkAsync,
  getMyContentAsync,
  getPathAsync,
} from './content';
import { getFollowsAsync, updateFollowAsync } from './follow';
const actions = {
  updateInfoAsync,
  updateProfileImageAsync,
  updateUserNameAsync,
  getInfoAsync,
  getBookmarksAsync,
  updateBookmarkAsync,
  getPathAsync,
  getMyContentAsync,
  getFollowsAsync,
  updateFollowAsync,
};

export type UserAction = ActionType<typeof actions>;
export * from './info';
export * from './content';
export * from './follow';
