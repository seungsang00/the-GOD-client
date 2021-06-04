import { ActionType } from 'typesafe-actions';

import { createContentAsync, createSharedContentAsync } from './create';
import { updateContentAsync } from './update';
import {
  inputArtist,
  inputTitle,
  inputTags,
  inputDescription,
  inputImages,
  inputDates,
  inputTimes,
  inputMobile,
  inputLocation,
  inputPerks,
  initForm,
  inputId,
} from './form';
import {
  getSharedContentAsync,
  getContentAsync,
  getContentListAsync,
  initRead,
} from './read';
import { deleteContentAsync } from './delete';

const actions = {
  getContentAsync,
  getContentListAsync,
  getSharedContentAsync,
  createSharedContentAsync,
  updateContentAsync,
  deleteContentAsync,
  createContentAsync,
  inputId,
  initRead,
  inputArtist,
  inputTitle,
  inputTags,
  inputDescription,
  inputImages,
  inputDates,
  inputTimes,
  inputLocation,
  inputPerks,
  inputMobile,
  initForm,
};

export type ContentAction = ActionType<typeof actions>;

export * from './create';
export * from './update';
export * from './delete';
export * from './form';
