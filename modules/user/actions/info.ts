import {
  API_ENDPOINT,
  GetInfoResponse,
  PutInfoResponse,
  PutProfileImageResponse,
  User,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR,
  USER_INFO_UPDATE,
  USER_INFO_UPDATE_SUCCESS,
  USER_INFO_UPDATE_ERROR,
  USER_NAME_UPDATE,
  USER_NAME_UPDATE_SUCCESS,
  USER_NAME_UPDATE_ERROR,
  USER_AVATAR_UPDATE,
  USER_AVATAR_UPDATE_SUCCESS,
  USER_AVATAR_UPDATE_ERROR,
} from '../../actionTypes';

export const getInfoAsync = createAsyncAction(
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR
)<null, GetInfoResponse, AxiosError>();

export const updateInfoAsync = createAsyncAction(
  USER_INFO_UPDATE,
  USER_INFO_UPDATE_SUCCESS,
  USER_INFO_UPDATE_ERROR
)<null, PutInfoResponse, AxiosError>();

export const updateUserNameAsync = createAsyncAction(
  USER_NAME_UPDATE,
  USER_NAME_UPDATE_SUCCESS,
  USER_NAME_UPDATE_ERROR
)<null, PutInfoResponse, AxiosError>();

export const updateProfileImageAsync = createAsyncAction(
  USER_AVATAR_UPDATE,
  USER_AVATAR_UPDATE_SUCCESS,
  USER_AVATAR_UPDATE_ERROR
)<null, PutInfoResponse, AxiosError>();

export const getInfoRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetInfoResponse>(`${API_ENDPOINT}/user`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  return result.data;
};

export const updateInfoRequest = async (user: User) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<PutInfoResponse>(
    `${API_ENDPOINT}/user`,
    user,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const updateUserNameRequest = async (name: string) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<{ message: string }>(
    `${API_ENDPOINT}/user/username`,
    { name },
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const updateProfileImageRequest = async (profileImage: FormData) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<PutProfileImageResponse>(
    `${API_ENDPOINT}/user/profile`,
    profileImage,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const getInfoThunk = createAsyncThunk(getInfoAsync, getInfoRequest);
export const updateInfoThunk = createAsyncThunk(
  updateInfoAsync,
  updateInfoRequest
);
export const updateUserNameThunk = createAsyncThunk(
  updateUserNameAsync,
  updateUserNameRequest
);
export const updateProfileImageThunk = createAsyncThunk(
  updateProfileImageAsync,
  updateProfileImageRequest
);
