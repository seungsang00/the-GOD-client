import { ActionType } from 'typesafe-actions';
import { createArtistAsync } from './create';
import { deleteArtistAsync } from './delete';
import { getArtistAsync } from './read';
import { updateArtistAsync } from './update';
const actions = {
  createArtistAsync,
  deleteArtistAsync,
  getArtistAsync,
  updateArtistAsync,
};

export type ArtistAction = ActionType<typeof actions>;
export * from './create';
export * from './delete';
export * from './read';
export * from './update';
