import { API_ENDPOINT, User } from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction, ActionType } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR,
} from '../../actionTypes';

export const getInfoAsync = createAsyncAction(
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR
)<null, User, AxiosError>();

const actions = {
  getInfoAsync,
};

export type UserAction = ActionType<typeof actions>;

export const getInfoRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<User>(`${API_ENDPOINT}/auth/signup`, {
    headers: {
      authorization: token,
    },
  });
  return result.data;
};

export const getInfoThunk = createAsyncThunk(getInfoAsync, getInfoRequest);
