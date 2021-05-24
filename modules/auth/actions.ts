import { API_ENDPOINT, LoginResponse, signup } from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction, ActionType } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_ERROR,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_PASSWORD_CHECK,
  AUTH_PASSWORD_UPDATE,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_PASSWORD_CHECK_ERROR,
  AUTH_PASSWORD_CHECK_SUCCESS,
  AUTH_PASSWORD_UPDATE_ERROR,
  AUTH_PASSWORD_UPDATE_SUCCESS,
} from '../actionTypes';

export const signupAsync = createAsyncAction(
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_ERROR
)<null, { message: string }, AxiosError>();

export const signoutAsync = createAsyncAction(
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_SIGNOUT_ERROR
)<null, { message: string }, AxiosError>();

export const checkPSAsync = createAsyncAction(
  AUTH_PASSWORD_CHECK,
  AUTH_PASSWORD_CHECK_SUCCESS,
  AUTH_PASSWORD_CHECK_ERROR
)<null, { message: string }, AxiosError>();

export const updatePSAsync = createAsyncAction(
  AUTH_PASSWORD_UPDATE,
  AUTH_PASSWORD_UPDATE_SUCCESS,
  AUTH_PASSWORD_UPDATE_ERROR
)<null, { message: string }, AxiosError>();

export const loginAsync = createAsyncAction(
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR
)<null, LoginResponse, AxiosError>();

const actions = {
  signoutAsync,
  signupAsync,
  checkPSAsync,
  updatePSAsync,
  loginAsync,
};

export type authAction = ActionType<typeof actions>;

export const singupRequest = async ({ email, password, username }: signup) => {
  const result = await axios.post<{ message: string }>(
    `${API_ENDPOINT}/auth/signup`,
    {
      email,
      password,
      username,
    }
  );
  return result.data;
};

export const singoutRequest = async () => {
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/auth/signout`
  );
  return result.data;
};

export const checkPSRequset = async (password: string) => {
  const result = await axios.post<{ message: string }>(
    `${API_ENDPOINT}/auth/password`,
    { password }
  );
  return result.data;
};
export const updatePSRequset = async (password: string) => {
  const result = await axios.put<{ message: string }>(
    `${API_ENDPOINT}/auth/password`,
    { password }
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
    localStorage.setItem('accesstoken', result.data.result.accessToken);
  }
  return result.data;
};
export const singupThunk = createAsyncThunk(signupAsync, singupRequest);
export const singoutThunk = createAsyncThunk(signoutAsync, singoutRequest);
export const checkPSThunk = createAsyncThunk(checkPSAsync, checkPSRequset);
export const updatePSThunk = createAsyncThunk(updatePSAsync, updatePSRequset);
export const loginThunk = createAsyncThunk(loginAsync, loginRequset);
