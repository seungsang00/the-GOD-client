import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_TWITTER,
  AUTH_TWITTER_APP_TOKEN,
  AUTH_TWITTER_APP_TOKEN_ERROR,
  AUTH_TWITTER_APP_TOKEN_SUCCESS,
  AUTH_TWITTER_ERROR,
  AUTH_TWITTER_SUCCESS,
  AUTH_TWITTER_USER_TOKEN,
  AUTH_TWITTER_USER_TOKEN_ERROR,
  AUTH_TWITTER_USER_TOKEN_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const twitterAuthRequest = async () => {
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/auth/signout`
  );
  return result.data;
};

export const twitterAppTokenRequest = async () => {
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/auth/signout`
  );
  return result.data;
};
export const twitterUserTokenRequest = async () => {
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/auth/signout`
  );
  return result.data;
};

export const twitterAuthAsync = createAsyncAction(
  AUTH_TWITTER,
  AUTH_TWITTER_SUCCESS,
  AUTH_TWITTER_ERROR
)<null, { message: string }, AxiosError>();

export const twitterAppTokenAsync = createAsyncAction(
  AUTH_TWITTER_APP_TOKEN,
  AUTH_TWITTER_APP_TOKEN_SUCCESS,
  AUTH_TWITTER_APP_TOKEN_ERROR
)<null, { message: string }, AxiosError>();

export const twitterUserTokenAsync = createAsyncAction(
  AUTH_TWITTER_USER_TOKEN,
  AUTH_TWITTER_USER_TOKEN_SUCCESS,
  AUTH_TWITTER_USER_TOKEN_ERROR
)<null, { message: string }, AxiosError>();

export const twitterAuthThunk = createAsyncThunk(
  twitterAuthAsync,
  twitterAuthRequest
);
export const twitterAppTokenThunk = createAsyncThunk(
  twitterAppTokenAsync,
  twitterAppTokenRequest
);
export const twitterUserTokenThunk = createAsyncThunk(
  twitterUserTokenAsync,
  twitterUserTokenRequest
);
