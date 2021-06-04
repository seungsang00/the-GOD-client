import { API_ENDPOINT, loginResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_GOOGLE,
  AUTH_GOOGLE_ERROR,
  AUTH_GOOGLE_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const googleAuthRequest = async (token: string) => {
  const result = await axios.post<loginResponse>(
    `${API_ENDPOINT}/auth/google`,
    {
      token,
    }
  );
  return result.data;
};

export const googleAuthAsync = createAsyncAction(
  AUTH_GOOGLE,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_ERROR
)<null, loginResponse, AxiosError>();

export const googleAuthThunk = createAsyncThunk(
  googleAuthAsync,
  googleAuthRequest
);
