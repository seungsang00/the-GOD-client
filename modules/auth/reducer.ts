import { createReducer } from 'typesafe-actions';
import { authReducer } from '@interfaces';
import { authAction } from './actions';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_PASSWORD_CHECK,
  AUTH_PASSWORD_CHECK_ERROR,
  AUTH_PASSWORD_CHECK_SUCCESS,
  AUTH_PASSWORD_UPDATE,
  AUTH_PASSWORD_UPDATE_ERROR,
  AUTH_PASSWORD_UPDATE_SUCCESS,
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_ERROR,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: authReducer = {
  signup: {
    data: null,
    loading: false,
    error: null,
  },
  signout: {
    data: null,
    loading: false,
    error: null,
  },
  checkps: {
    data: null,
    loading: false,
    error: null,
  },
  updateps: {
    data: null,
    loading: false,
    error: null,
  },
  login: {
    data: null,
    loading: false,
    error: null,
  },
};

const auth = createReducer<authReducer, authAction>(initialState, {
  [AUTH_SIGNUP]: (state) => ({
    ...state,
    signup: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    signup: {
      loading: false,
      error: null,
      data: { message: action.payload.message },
    },
  }),
  [AUTH_SIGNUP_ERROR]: (state, action) => ({
    ...state,
    signup: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [AUTH_SIGNOUT]: (state) => ({
    ...state,
    signout: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_SIGNOUT_SUCCESS]: (state, action) => ({
    ...state,
    signout: {
      loading: false,
      error: null,
      data: { message: action.payload.message },
    },
  }),
  [AUTH_SIGNOUT_ERROR]: (state, action) => ({
    ...state,
    signout: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [AUTH_PASSWORD_CHECK]: (state) => ({
    ...state,
    checkps: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_PASSWORD_CHECK_SUCCESS]: (state, action) => ({
    ...state,
    checkps: {
      loading: false,
      error: null,
      data: { message: action.payload.message },
    },
  }),
  [AUTH_PASSWORD_CHECK_ERROR]: (state, action) => ({
    ...state,
    checkps: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [AUTH_PASSWORD_UPDATE]: (state) => ({
    ...state,
    updateps: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_PASSWORD_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    updateps: {
      loading: false,
      error: null,
      data: { message: action.payload.message },
    },
  }),
  [AUTH_PASSWORD_UPDATE_ERROR]: (state, action) => ({
    ...state,
    updateps: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [AUTH_LOGIN]: (state) => ({
    ...state,
    login: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: { accessToken: action.payload.result.accessToken },
    },
  }),
  [AUTH_LOGIN_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default auth;
