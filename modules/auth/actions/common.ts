import { API_ENDPOINT, GetAccessTokenResponse } from '@interfaces';
import createAsyncThunk, { refeshTokenThunk } from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_ERROR,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_TOKEN,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const singoutRequest = async (password: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/auth/signout`,
    {
      headers: { authorization: `BEARER ${accessToken}` },
      data: { password },
    }
  );
  return result.data;
};

export const tokenRequest = async () => {
  const result = await axios.get<GetAccessTokenResponse>(
    `${API_ENDPOINT}/auth/accesstoken`,
    { withCredentials: true }
  );
  if (window) {
    localStorage.setItem('accessToken', result.data.result.accessToken);
  }
  return result.data;
};

export const signoutAsync = createAsyncAction(
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_SIGNOUT_ERROR
)<null, { message: string }, AxiosError>();

export const tokenAsync = createAsyncAction(
  AUTH_TOKEN,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_ERROR
)<null, GetAccessTokenResponse, AxiosError>();

export const singoutThunk = createAsyncThunk(signoutAsync, singoutRequest);
export const tokenThunk = refeshTokenThunk(tokenAsync, tokenRequest);
