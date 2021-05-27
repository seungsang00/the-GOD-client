import { ActionType } from 'typesafe-actions';

import { createCommentAsync } from './create';
import { updateCommentAsync } from './update';
import { getCommentListAsync } from './read';
import { deleteCommentAsync } from './delete';

const actions = {
  getCommentListAsync,
  deleteCommentAsync,
  updateCommentAsync,
  createCommentAsync,
};

export type CommentAction = ActionType<typeof actions>;

export * from './create';
export * from './update';
export * from './delete';
export * from './read';
