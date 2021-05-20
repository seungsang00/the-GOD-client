import axios from 'axios';
import { userReducer, user } from '@interfaces';
import * as actionTypes from './actionTypes';

// Actions
const { USER_INFO_GET_ERROR, USER_INFO_GET_SUCCESS } = actionTypes;
const API_ENDPOINT = process.env.NEXT_PUBLIC_API as string;

// default Store
const initialState: userReducer = {
  token: '',
  error: null,
  user: {
    username: '',
    email: '',
    profileImage: '',
  },
};

const getInfoSuccessHandler = (data: user) => ({
  type: USER_INFO_GET_SUCCESS,
  payload: { user: data },
});

const getInfoErrroHandler = (error: Error | string) => ({
  type: USER_INFO_GET_ERROR,
  payload: { error },
});

export const getUserInfo = (token: String) => {
  return async (dispatch: Function) => {
    try {
      // 만약 입력받은 토큰이 없다면 localStorage 에서 토큰이 있는지 확인한다.
      const result = await axios.get<user>(`${API_ENDPOINT}/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (result.status === 200) {
        dispatch(getInfoSuccessHandler(result.data));
      } else {
        dispatch(getInfoErrroHandler('fail get user info'));
      }
    } catch (err) {
      dispatch(getInfoErrroHandler(err));
      // throw err
    }
  };
};

type userAction =
  | ReturnType<typeof getInfoErrroHandler>
  | ReturnType<typeof getInfoSuccessHandler>;

const users = (
  state: userReducer = initialState,
  action: userAction
): userReducer => {
  switch (action.type) {
    case USER_INFO_GET_SUCCESS:
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    case USER_INFO_GET_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default users;
