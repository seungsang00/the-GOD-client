import axios from 'axios';
import { authReducer, signup } from '@interfaces';
import * as actionTypes from './actionTypes';

// Actions
const {
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNOUT_ERROR,
  AUTH_SIGNOUT_SUCCESS,
} = actionTypes;
const API_ENDPOINT = process.env.NEXT_PUBLIC_API as string;

// default Store
const initialState: authReducer = {
  error: null,
  id: '',
};

const signupSuccessHandler = () => ({
  type: AUTH_SIGNUP_SUCCESS,
  payload: null,
});
const signoutSuccessHandler = () => ({
  type: AUTH_SIGNOUT_SUCCESS,
  payload: null,
});

const signupErrroHandler = (error: Error | string) => ({
  type: AUTH_SIGNUP_ERROR,
  payload: { error },
});
const signoutErrroHandler = (error: Error | string) => ({
  type: AUTH_SIGNOUT_ERROR,
  payload: { error },
});

export const signupRequest = ({ email, password, username }: signup) => {
  return async (dispatch: Function) => {
    try {
      // 만약 입력받은 토큰이 없다면 localStorage 에서 토큰이 있는지 확인한다.
      const result = await axios.post(`${API_ENDPOINT}/auth/signup`, {
        email,
        password,
        username,
      });

      if (result.status === 200) {
        dispatch(signupSuccessHandler());
      } else {
        dispatch(signupErrroHandler('not status 200'));
      }
    } catch (err) {
      dispatch(signupErrroHandler(err));
      // throw err
    }
  };
};
export const signoutRequest = (token: String) => {
  return async (dispatch: Function) => {
    try {
      // 만약 입력받은 토큰이 없다면 localStorage 에서 토큰이 있는지 확인한다.
      const result = await axios.delete(`${API_ENDPOINT}/auth/signout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true,
      });

      if (result.status === 200) {
        dispatch(signoutSuccessHandler());
      } else {
        dispatch(signoutErrroHandler('not status 200'));
      }
    } catch (err) {
      dispatch(signoutErrroHandler(err));
      // throw err
    }
  };
};

type userAction =
  | ReturnType<typeof signoutSuccessHandler>
  | ReturnType<typeof signupSuccessHandler>
  | ReturnType<typeof signupErrroHandler>
  | ReturnType<typeof signoutErrroHandler>;

const auth = (
  state: authReducer = initialState,
  action: userAction
): authReducer => {
  switch (action.type) {
    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case AUTH_SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case AUTH_SIGNOUT_SUCCESS:
      return state;
    case AUTH_SIGNOUT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default auth;
