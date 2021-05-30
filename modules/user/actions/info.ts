import {
  API_ENDPOINT,
  GetInfoResponse,
  PutInfoResponse,
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

export const getInfoThunk = createAsyncThunk(getInfoAsync, getInfoRequest);
export const updateInfoThunk = createAsyncThunk(
  updateInfoAsync,
  updateInfoRequest
);
