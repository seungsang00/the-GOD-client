import { ActionType } from 'typesafe-actions';

import { createAsync } from './create';
import { updateAsync } from './update';
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
} from './form';
import { getContentAsync, getContentListAsync } from './read';
import {} from './delete';

const actions = {
  getContentAsync,
  getContentListAsync,
  updateAsync,
  createAsync,
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
};

export type ContentAction = ActionType<typeof actions>;

export * from './create';
export * from './update';
export * from './delete';
export * from './form';
