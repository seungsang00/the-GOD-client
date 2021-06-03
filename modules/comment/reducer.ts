import { createReducer } from 'typesafe-actions';
import { CommentReducer } from '@interfaces';
import { CommentAction } from './actions';
import {
  COMMENT_CREATE,
  COMMENT_CREATE_ERROR,
  COMMENT_CREATE_SUCCESS,
  COMMENT_DELETE,
  COMMENT_DELETE_ERROR,
  COMMENT_DELETE_SUCCESS,
  COMMENT_LIST_GET,
  COMMENT_LIST_GET_ERROR,
  COMMENT_LIST_GET_SUCCESS,
  COMMENT_UPDATE,
  COMMENT_UPDATE_ERROR,
  COMMENT_UPDATE_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: CommentReducer = {
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

const comment = createReducer<CommentReducer, CommentAction>(initialState, {
  [COMMENT_LIST_GET]: (state) => ({
    ...state,
    list: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [COMMENT_LIST_GET_SUCCESS]: (_state, action) => ({
    ...initialState,
    list: {
      loading: false,
      error: null,
      data: action.payload.result.comments,
    },
  }),
  [COMMENT_LIST_GET_ERROR]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [COMMENT_CREATE]: (state) => ({
    ...state,
    create: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [COMMENT_CREATE_SUCCESS]: (state, action) => {
    return {
      ...state,
      create: {
        loading: false,
        error: null,
        data: action.payload.result,
      },
    };
  },
  [COMMENT_CREATE_ERROR]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [COMMENT_UPDATE]: (state) => ({
    ...state,
    update: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [COMMENT_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [COMMENT_UPDATE_ERROR]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [COMMENT_DELETE]: (state) => ({
    ...state,
    delete: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [COMMENT_DELETE_SUCCESS]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: null,
      data:
        state.list.data &&
        state.list.data.filter((el) => el.id !== action.payload.result.id),
    },
    delete: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [COMMENT_DELETE_ERROR]: (state, action) => ({
    ...state,
    delete: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default comment;
