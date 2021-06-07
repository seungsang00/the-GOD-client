import { createReducer } from 'typesafe-actions';
import { AuthReducer } from '@interfaces';
import { AuthAction } from './actions';
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
  AUTH_GOOGLE,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_ERROR,
  AUTH_SIGNUP,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_TOKEN,
  AUTH_TOKEN_ERROR,
  AUTH_TOKEN_IS_EXPIRE,
  AUTH_TOKEN_SUCCESS,
  AUTH_KAKAO,
  AUTH_KAKAO_SUCCESS,
  AUTH_KAKAO_ERROR,
  AUTH_KAKAO_TOKEN,
  AUTH_KAKAO_TOKEN_SUCCESS,
  AUTH_KAKAO_TOKEN_ERROR,
  AUTH_TWITTER,
  AUTH_TWITTER_SUCCESS,
  AUTH_TWITTER_ERROR,
} from '../actionTypes';

// default Store
const initialState: AuthReducer = {
  isExpire: false,
  signup: {
    data: null,
    loading: false,
    error: null,
  },
  token: {
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
  kakao: {
    data: null,
    loading: false,
    error: null,
  },
};

const auth = createReducer<AuthReducer, AuthAction>(initialState, {
  [AUTH_TOKEN_IS_EXPIRE]: (state) => ({
    ...state,
    isExpire: true,
  }),
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
  [AUTH_TOKEN]: (state) => ({
    ...state,
    token: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    token: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
    isExpire: false,
  }),
  [AUTH_TOKEN_ERROR]: (state, action) => ({
    ...state,
    token: {
      loading: false,
      error: action.payload.response,
      data: null,
    },
    isExpire: false,
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
      data: action.payload,
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
      data: action.payload,
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
  [AUTH_GOOGLE]: (state) => ({
    ...state,
    login: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_GOOGLE_SUCCESS]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [AUTH_GOOGLE_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload.response,
      data: null,
    },
  }),
  [AUTH_KAKAO_TOKEN]: (state) => ({
    ...state,
    kakao: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_KAKAO_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    kakao: {
      loading: false,
      error: null,
      data: { accessToken: action.payload.access_token },
    },
  }),
  [AUTH_KAKAO_TOKEN_ERROR]: (state, action) => ({
    ...state,
    kakao: {
      loading: false,
      error: action.payload.response,
      data: null,
    },
  }),
  [AUTH_KAKAO]: (state) => ({
    ...state,
    login: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_KAKAO_SUCCESS]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [AUTH_KAKAO_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload.response,
      data: null,
    },
  }),
  [AUTH_TWITTER]: (state) => ({
    ...state,
    login: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [AUTH_TWITTER_SUCCESS]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [AUTH_TWITTER_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload.response,
      data: null,
    },
  }),
});

export default auth;
