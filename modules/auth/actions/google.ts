import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_GOOGLE,
  AUTH_GOOGLE_ERROR,
  AUTH_GOOGLE_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

interface googleResponse {
  token: string;
}

export const googelAuthRequest = async (token: string) => {
  const result = await axios.post<googleResponse>(
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
)<null, googleResponse, AxiosError>();

export const googelAuthThunk = createAsyncThunk(
  googleAuthAsync,
  googelAuthRequest
);
