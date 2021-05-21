import { createReducer } from 'typesafe-actions';
import { UserState } from '@interfaces';
import { UserAction } from './actions';
import {
  USER_INFO_GET,
  USER_INFO_GET_ERROR,
  USER_INFO_GET_SUCCESS,
} from '../actionTypes';

// default Store
const initialState: UserState = {
  userProfile: {
    data: null,
    loading: false,
    error: null,
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [USER_INFO_GET]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [USER_INFO_GET_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [USER_INFO_GET_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
});

export default user;
