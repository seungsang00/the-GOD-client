import {
  API_ENDPOINT,
  GetFollowResponse,
  PutFollowResponse,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_SUCCESS,
  USER_FOLLOW_GET_ERROR,
  USER_FOLLOW_UPDATE,
  USER_FOLLOW_UPDATE_SUCCESS,
  USER_FOLLOW_UPDATE_ERROR,
} from '../../actionTypes';

export const getFollowsAsync = createAsyncAction(
  USER_FOLLOW_GET,
  USER_FOLLOW_GET_SUCCESS,
  USER_FOLLOW_GET_ERROR
)<null, GetFollowResponse, AxiosError>();

export const updateFollowAsync = createAsyncAction(
  USER_FOLLOW_UPDATE,
  USER_FOLLOW_UPDATE_SUCCESS,
  USER_FOLLOW_UPDATE_ERROR
)<null, PutFollowResponse, AxiosError>();

export const getFollowsRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetFollowResponse>(
    `${API_ENDPOINT}/user/follow`,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};
export const updateFollowRequest = async (id: string) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<PutFollowResponse>(
    `${API_ENDPOINT}/user/follow`,
    { artistId: id },
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};
export const getFollowsThunk = createAsyncThunk(
  getFollowsAsync,
  getFollowsRequest
);
export const updateFollowThunk = createAsyncThunk(
  updateFollowAsync,
  updateFollowRequest
);
