import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_TWITTER,
  AUTH_TWITTER_ERROR,
  AUTH_TWITTER_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const twitterAuthRequest = async (err: any, data: any) => {
  if (err) return err;
  const result = await axios.post<{
    result: { accessToken: string };
    message: string;
  }>(`${API_ENDPOINT}/auth/signout`, {
    token: data.oauth_token,
  });
  if (window)
    localStorage.setItem('accessToken', result.data.result.accessToken);
  return result.data;
};

export const twitterAuthAsync = createAsyncAction(
  AUTH_TWITTER,
  AUTH_TWITTER_SUCCESS,
  AUTH_TWITTER_ERROR
)<
  null,
  {
    result: { accessToken: string };
    message: string;
  },
  AxiosError
>();

export const twitterAuthThunk = createAsyncThunk(
  twitterAuthAsync,
  twitterAuthRequest
);
