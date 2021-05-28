import {
  API_ENDPOINT,
  ContentQuery,
  GetContentListResponse,
  GetContentResponse,
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
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const getContentRequest = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.get<GetContentResponse>(
    `${API_ENDPOINT}/content?id=${id}`,
    {
      headers: { authorization: accessToken },
    }
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
  const result = await axios.get<GetContentListResponse>(
    `${API_ENDPOINT}/content/query?artistId=${artistId}&location=${location}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
    {
      headers: { authorization: accessToken },
    }
  );
  return result.data;
};

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
