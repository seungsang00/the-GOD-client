import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_ERROR,
  AUTH_SIGNOUT_SUCCESS,
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

export const signoutAsync = createAsyncAction(
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_SIGNOUT_ERROR
)<null, { message: string }, AxiosError>();

export const singoutThunk = createAsyncThunk(signoutAsync, singoutRequest);
