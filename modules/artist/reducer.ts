import { createReducer } from 'typesafe-actions';
import { ArtistReducer } from '@interfaces';
import { ArtistAction } from './actions';
import {
  ARTIST_GET,
  ARTIST_GET_ERROR,
  ARTIST_GET_SUCCESS,
  ARTIST_UPDATE,
  ARTIST_UPDATE_ERROR,
  ARTIST_UPDATE_SUCCESS,
  ARTIST_DELETE,
  ARTIST_DELETE_ERROR,
  ARTIST_DELETE_SUCCESS,
  ARTIST_POST,
  ARTIST_POST_ERROR,
  ARTIST_POST_SUCCESS,
} from '../actionTypes';
// import { AccountOptionsFlyout } from 'components/AccountOptions';

// default Store
const initialState: ArtistReducer = {
  create: {
    loading: true,
    error: null,
    data: null,
  },
  read: {
    loading: true,
    error: null,
    data: null,
  },
  update: {
    loading: true,
    error: null,
    data: null,
  },
  delete: {
    loading: true,
    error: null,
    data: null,
  },
};

const artist = createReducer<ArtistReducer, ArtistAction>(initialState, {
  [ARTIST_GET]: (state) => ({
    ...state,
    read: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ARTIST_GET_SUCCESS]: (state, action) => ({
    ...state,
    read: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [ARTIST_GET_ERROR]: (state, action) => ({
    ...state,
    read: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [ARTIST_UPDATE]: (state) => ({
    ...state,
    update: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ARTIST_UPDATE_ERROR]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [ARTIST_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [ARTIST_DELETE]: (state) => ({
    ...state,
    delete: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ARTIST_DELETE_ERROR]: (state, action) => ({
    ...state,
    delete: {
      loading: false,
      error: action.payload.message,
      data: null,
    },
  }),
  [ARTIST_DELETE_SUCCESS]: (state, action) => ({
    ...state,
    delete: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [ARTIST_POST]: (state) => ({
    ...state,
    create: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ARTIST_POST_ERROR]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: action.payload.result.message,
      data: null,
    },
  }),
  [ARTIST_POST_SUCCESS]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
});

export default artist;
