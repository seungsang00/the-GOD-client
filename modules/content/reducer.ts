import { createReducer } from 'typesafe-actions';
import { contentReducer } from '@interfaces';
import { contentAction } from './actions';
import {
  CONTENT_POST,
  CONTENT_POST_ERROR,
  CONTENT_POST_SUCCESS,
  CONTENT_GET,
  CONTENT_GET_ERROR,
  CONTENT_GET_SUCCESS,
  CONTENT_SEARCH_GET,
  CONTENT_SEARCH_GET_ERROR,
  CONTENT_SEARCH_GET_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: contentReducer = {
  getcontent: {
    data: null,
    loading: false,
    error: null,
  },
  postcontent: {
    data: null,
    loading: false,
    error: null,
  },
  getsearchresults: {
    data: null,
    loading: false,
    error: null,
  },
};

const content = createReducer<contentReducer, contentAction>(initialState, {
  [CONTENT_GET]: (state) => ({
    ...state,
    getcontent: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_GET_SUCCESS]: (state, action) => ({
    ...state,
    getcontent: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [CONTENT_GET_ERROR]: (state, action) => ({
    ...state,
    getcontent: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_POST]: (state) => ({
    ...state,
    postcontent: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_POST_SUCCESS]: (state, action) => ({
    ...state,
    postcontent: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [CONTENT_POST_ERROR]: (state, action) => ({
    ...state,
    postcontent: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_SEARCH_GET]: (state) => ({
    ...state,
    getsearchresults: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_SEARCH_GET_SUCCESS]: (state, action) => ({
    ...state,
    getsearchresults: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [CONTENT_SEARCH_GET_ERROR]: (state, action) => ({
    ...state,
    getsearchresults: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default content;
