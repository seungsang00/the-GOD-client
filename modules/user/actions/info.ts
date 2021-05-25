import { API_ENDPOINT, GetInfoResponse } from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR,
} from '../../actionTypes';

export const getInfoAsync = createAsyncAction(
  USER_INFO_GET,
  USER_INFO_GET_SUCCESS,
  USER_INFO_GET_ERROR
)<null, GetInfoResponse, AxiosError>();

export const getInfoRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetInfoResponse>(`${API_ENDPOINT}/user`, {
    headers: {
      authorization: token,
    },
  });
  return result.data;
};

export const getInfoThunk = createAsyncThunk(getInfoAsync, getInfoRequest);
