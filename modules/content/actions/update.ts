import {
  API_ENDPOINT,
  Content,
  ContentForm,
  PutBookmarkResponse,
  PutContentResponse,
} from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_UPDATE,
  CONTENT_UPDATE_SUCCESS,
  CONTENT_UPDATE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const updateContentRequest = async (content: ContentForm) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.post<PutContentResponse>(
    `${API_ENDPOINT}/content`,
    content,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};
export const updateBookmarkRequest = async (content: Content) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.put<PutBookmarkResponse>(
    `${API_ENDPOINT}/user/bookmark`,
    content,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const updateContentAsync = createAsyncAction(
  CONTENT_UPDATE,
  CONTENT_UPDATE_SUCCESS,
  CONTENT_UPDATE_ERROR
)<null, PutContentResponse, AxiosError>();

export const updateContentThunk = createAsyncThunk(
  updateContentAsync,
  updateContentRequest
);
