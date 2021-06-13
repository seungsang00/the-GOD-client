import {
  API_ENDPOINT,
  Content,
  ContentForm,
  PostContentResponse,
  PostSharedContentResponse,
} from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_CREATE,
  CONTENT_CREATE_SUCCESS,
  CONTENT_CREATE_ERROR,
  CONTENT_SHARED_CREATE,
  CONTENT_SHARED_CREATE_SUCCESS,
  CONTENT_SHARED_CREATE_ERROR,
  CONTENT_CREATE_INIT,
} from 'modules/actionTypes';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const createContentRequest = async (content: ContentForm) => {
  const accessToken = localStorage.getItem('accessToken');
  const formData = new FormData();
  const keys = Object.keys(content) as (keyof ContentForm)[];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key === 'id' || key === 'author') continue;
    if (key === 'images') {
      content[key].forEach((image) => {
        formData.append(key, image.data, image.name);
      });
      continue;
    }
    if (key === 'artist') {
      formData.append('artistId', JSON.stringify(content[key].id));
      continue;
    }
    formData.append(key, JSON.stringify(content[key]));
  }
  const result = await axios.post<PostContentResponse>(
    `${API_ENDPOINT}/content`,
    formData,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const createSharedContentRequest = async (contents: Content[]) => {
  const accessToken = localStorage.getItem('accessToken');
  const contentIDs = contents.map((content) => content.id);
  const result = await axios.post<PostSharedContentResponse>(
    `${API_ENDPOINT}/sharedcontent`,
    { contents: contentIDs },
    {
      headers: { authorization: `bearer ${accessToken}` },
    }
  );
  return result.data;
};

export const initCreateState = createAction(CONTENT_CREATE_INIT)();

export const createContentAsync = createAsyncAction(
  CONTENT_CREATE,
  CONTENT_CREATE_SUCCESS,
  CONTENT_CREATE_ERROR
)<null, PostContentResponse, AxiosError>();

export const createSharedContentAsync = createAsyncAction(
  CONTENT_SHARED_CREATE,
  CONTENT_SHARED_CREATE_SUCCESS,
  CONTENT_SHARED_CREATE_ERROR
)<null, PostSharedContentResponse, AxiosError>();

export const createContentThunk = createAsyncThunk(
  createContentAsync,
  createContentRequest
);
export const createSharedContentThunk = createAsyncThunk(
  createSharedContentAsync,
  createSharedContentRequest
);
