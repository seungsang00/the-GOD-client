import {
  API_ENDPOINT,
  GetBookmarkResponse,
  GetUserContentResponse,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  USER_CONTENT_GET,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_GET_ERROR,
  USER_BOOKMARK_GET,
  USER_BOOKMARK_GET_SUCCESS,
  USER_BOOKMARK_GET_ERROR,
} from '../../actionTypes';

export const getMyContentAsync = createAsyncAction(
  USER_CONTENT_GET,
  USER_CONTENT_GET_SUCCESS,
  USER_CONTENT_GET_ERROR
)<null, GetUserContentResponse, AxiosError>();

export const getBookmarksAsync = createAsyncAction(
  USER_BOOKMARK_GET,
  USER_BOOKMARK_GET_SUCCESS,
  USER_BOOKMARK_GET_ERROR
)<null, GetBookmarkResponse, AxiosError>();

export const getMyContentRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetUserContentResponse>(
    `${API_ENDPOINT}/user/content`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  return result.data;
};
export const getBookmarksRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.get<GetBookmarkResponse>(
    `${API_ENDPOINT}/user/bookmark`,
    {
      headers: {
        authorization: token,
      },
    }
  );
  return result.data;
};

export const getMyContentThunk = createAsyncThunk(
  getMyContentAsync,
  getMyContentRequest
);
export const getBookmarksThunk = createAsyncThunk(
  getBookmarksAsync,
  getBookmarksRequest
);
