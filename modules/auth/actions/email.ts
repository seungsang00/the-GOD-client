import { API_ENDPOINT, LoginResponse, signup } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_PASSWORD_CHECK,
  AUTH_PASSWORD_CHECK_ERROR,
  AUTH_PASSWORD_CHECK_SUCCESS,
  AUTH_PASSWORD_UPDATE,
  AUTH_PASSWORD_UPDATE_ERROR,
  AUTH_PASSWORD_UPDATE_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const singupRequest = async ({ email, password, name }: signup) => {
  const result = await axios.post<{ message: string }>(
    `${API_ENDPOINT}/auth/signup`,
    {
      email,
      password,
      name,
    }
  );
  return result.data;
};

export const loginRequset = async (props: {
  email: string;
  password: string;
}) => {
  const { email, password } = props;
  const result = await axios.post<LoginResponse>(`${API_ENDPOINT}/auth/login`, {
    email,
    password,
  });
  if (window) {
    localStorage.setItem('accessToken', result.data.result.accessToken);
  }
  return result.data.result.accessToken;
};

export const checkPSRequset = async (password: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.post<{ message: string }>(
    `${API_ENDPOINT}/auth/password`,
    { password },
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};
export const updatePSRequset = async (password: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.put<{ message: string }>(
    `${API_ENDPOINT}/auth/password`,
    { password },
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const checkPSAsync = createAsyncAction(
  AUTH_PASSWORD_CHECK,
  AUTH_PASSWORD_CHECK_SUCCESS,
  AUTH_PASSWORD_CHECK_ERROR
)<null, { message: string }, AxiosError>();

export const signupAsync = createAsyncAction(
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_ERROR
)<null, { message: string }, AxiosError>();

export const loginAsync = createAsyncAction(
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR
)<null, { accessToken: string }, AxiosError>();

export const updatePSAsync = createAsyncAction(
  AUTH_PASSWORD_UPDATE,
  AUTH_PASSWORD_UPDATE_SUCCESS,
  AUTH_PASSWORD_UPDATE_ERROR
)<null, { passwordUpdate: string }, AxiosError>();

export const singupThunk = createAsyncThunk(signupAsync, singupRequest);
export const loginThunk = createAsyncThunk(loginAsync, loginRequset);
export const updatePSThunk = createAsyncThunk(updatePSAsync, updatePSRequset);
export const checkPSThunk = createAsyncThunk(checkPSAsync, checkPSRequset);
