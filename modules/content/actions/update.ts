import {
  API_ENDPOINT,
  Content,
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

export const updateRequest = async (content: Content) => {
  // TODO: 컨텐츠 업데이트 미구현
  return;
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
  // TODO: 컨텐츠 업데이트 미구현
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

export const updateAsync = createAsyncAction(
  CONTENT_UPDATE,
  CONTENT_UPDATE_SUCCESS,
  CONTENT_UPDATE_ERROR
)<null, PutContentResponse, AxiosError>();

export const updateThunk = createAsyncThunk(updateAsync, updateRequest);
