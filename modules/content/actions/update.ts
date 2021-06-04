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

const createContentForm = (content: ContentForm) => {
  const formData = new FormData();
  const keys = Object.keys(content) as (keyof ContentForm)[];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key === 'author') continue;
    if (key === 'images') {
      content[key].forEach((image) => {
        formData.append(key, image.data, image.name);
      });
      continue;
    }
    if (key === 'artist') {
      formData.append('artistId', JSON.stringify('nha'));
      continue;
    }
    formData.append(key, JSON.stringify(content[key]));
  }
  return formData;
};
export const updateContentRequest = async (contentform: ContentForm) => {
  const accessToken = localStorage.getItem('accessToken');
  const formData = createContentForm(contentform);
  const result = await axios.put<PutContentResponse>(
    `${API_ENDPOINT}/content`,
    formData,
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
