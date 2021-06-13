import {
  API_ENDPOINT,
  ContentQuery,
  GetContentListResponse,
  GetContentResponse,
  GetSharedContentResponse,
} from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_GET,
  CONTENT_GET_SUCCESS,
  CONTENT_GET_ERROR,
  CONTENT_LIST_GET,
  CONTENT_LIST_GET_SUCCESS,
  CONTENT_LIST_GET_ERROR,
  CONTENT_SHARED_GET,
  CONTENT_SHARED_GET_SUCCESS,
  CONTENT_SHARED_GET_ERROR,
  CONTENT_INIT_GET,
} from 'modules/actionTypes';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const getContentRequest = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const option = accessToken
    ? {
        headers: { authorization: `BEARER ${accessToken}` },
      }
    : {};
  console.log(option);
  const result = await axios.get<GetContentResponse>(
    `${API_ENDPOINT}/content?id=${id}`,
    option
  );
  return result.data;
};
export const getContentListRequest = async ({
  artistId,
  location,
  dateStart,
  dateEnd,
}: ContentQuery) => {
  const accessToken = localStorage.getItem('accessToken');
  const option = accessToken
    ? {
        headers: { authorization: `BEARER ${accessToken}` },
      }
    : {};
  const result = await axios.get<GetContentListResponse>(
    `${API_ENDPOINT}/content/query?artistId=${artistId}&location=${location}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
    option
  );
  return result.data;
};

export const initRead = createAction(CONTENT_INIT_GET, () => {})();
export const getSharedContentRequest = async (id: string) => {
  const result = await axios.get<GetSharedContentResponse>(
    `${API_ENDPOINT}/sharedcontent?id=${id}`
  );
  return result.data;
};

export const getSharedContentAsync = createAsyncAction(
  CONTENT_SHARED_GET,
  CONTENT_SHARED_GET_SUCCESS,
  CONTENT_SHARED_GET_ERROR
)<null, GetSharedContentResponse, AxiosError>();

export const getContentAsync = createAsyncAction(
  CONTENT_GET,
  CONTENT_GET_SUCCESS,
  CONTENT_GET_ERROR
)<null, GetContentResponse, AxiosError>();

export const getContentListAsync = createAsyncAction(
  CONTENT_LIST_GET,
  CONTENT_LIST_GET_SUCCESS,
  CONTENT_LIST_GET_ERROR
)<null, GetContentListResponse, AxiosError>();

export const getContentThunk = createAsyncThunk(
  getContentAsync,
  getContentRequest
);
export const getContentListThunk = createAsyncThunk(
  getContentListAsync,
  getContentListRequest
);
export const getSharedContentThunk = createAsyncThunk(
  getSharedContentAsync,
  getSharedContentRequest
);
