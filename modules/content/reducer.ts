import { createReducer } from 'typesafe-actions';
import { ContentReducer } from '@interfaces';
import { ContentAction } from './actions';
import {
  CONTENT_CREATE,
  CONTENT_CREATE_ERROR,
  CONTENT_CREATE_SUCCESS,
  CONTENT_GET,
  CONTENT_GET_ERROR,
  CONTENT_GET_SUCCESS,
  CONTENT_LIST_GET,
  CONTENT_LIST_GET_ERROR,
  CONTENT_LIST_GET_SUCCESS,
  CONTENT_UPDATE,
  CONTENT_UPDATE_ERROR,
  CONTENT_UPDATE_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: ContentReducer = {
  list: {
    data: null,
    loading: false,
    error: null,
  },
  current: {
    data: null,
    loading: false,
    error: null,
  },
  create: {
    data: null,
    loading: false,
    error: null,
  },
  update: {
    data: null,
    loading: false,
    error: null,
  },
  delete: {
    data: null,
    loading: false,
    error: null,
  },
};

const content = createReducer<ContentReducer, ContentAction>(initialState, {
  [CONTENT_GET]: (state) => ({
    ...state,
    current: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_GET_SUCCESS]: (state, action) => ({
    ...state,
    current: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_GET_ERROR]: (state, action) => ({
    ...state,
    current: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_CREATE]: (state) => ({
    ...state,
    create: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_CREATE_SUCCESS]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_CREATE_ERROR]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_UPDATE]: (state) => ({
    ...state,
    update: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_UPDATE_ERROR]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_LIST_GET]: (state) => ({
    ...state,
    list: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_LIST_GET_SUCCESS]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_LIST_GET_ERROR]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default content;
