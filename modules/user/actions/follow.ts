import {
  API_ENDPOINT,
  GetFollowResponse,
  GetInfoResponse,
  PutFollowResponse,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_SUCCESS,
  USER_FOLLOW_GET_ERROR,
} from '../../actionTypes';

export const getFollowsAsync = createAsyncAction(
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_SUCCESS,
  USER_FOLLOW_GET_ERROR
)<null, GetFollowResponse, AxiosError>();

export const getFollowsRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetFollowResponse>(`${API_ENDPOINT}/user`, {
    headers: {
      authorization: token,
    },
  });
  return result.data;
};
export const updateFollowRequest = async (id: string) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<PutFollowResponse>(
    `${API_ENDPOINT}/user/follow`,
    { id },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return result.data;
};
export const getFollowsThunk = createAsyncThunk(
  getFollowsAsync,
  getFollowsRequest
);
