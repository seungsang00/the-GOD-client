import { createAction } from 'typesafe-actions';
import {
  CONTENT_FORM_ARTIST,
  CONTENT_FORM_TITLE,
  CONTENT_FORM_TAGS,
  CONTENT_FORM_DESCRIPTION,
  CONTENT_FORM_IMAGES,
  CONTENT_FORM_DATES,
  CONTENT_FORM_TIMES,
  CONTENT_FORM_LOCATION,
  CONTENT_FORM_PERKS,
  CONTENT_FORM_MOBILE,
  CONTENT_INIT_FORM,
  CONTENT_FORM_ID,
} from 'modules/actionTypes';
import { IArtist, ToggleProps } from '@interfaces';
export const inputArtist = createAction(
  CONTENT_FORM_ARTIST,
  (artist: IArtist) => artist
)();
export const inputTitle = createAction(
  CONTENT_FORM_TITLE,
  (title: string) => title
)();
export const inputTags = createAction(
  CONTENT_FORM_TAGS,
  (tags: string[]) => tags
)();
export const inputDescription = createAction(
  CONTENT_FORM_DESCRIPTION,
  (description) => description
)();
export const inputImages = createAction(
  CONTENT_FORM_IMAGES,
  (images: { name: string; data: File; url: string }[]) => images
)();
export const inputDates = createAction(CONTENT_FORM_DATES, (dates) => dates)();
export const inputTimes = createAction(CONTENT_FORM_TIMES, (times) => times)();
export const inputLocation = createAction(
  CONTENT_FORM_LOCATION,
  (location) => location
)();
export const inputMobile = createAction(
  CONTENT_FORM_MOBILE,
  (mobile) => mobile
)();
export const inputPerks = createAction(
  CONTENT_FORM_PERKS,
  (icon: ToggleProps['icon']) => icon
)();
export const initForm = createAction(CONTENT_INIT_FORM, () => {})();
export const inputId = createAction(CONTENT_FORM_ID, (id: string) => id)();
