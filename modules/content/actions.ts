import {
  API_ENDPOINT,
  PostContentResponse,
  GetContentResponse,
  GetSearchResultsResponse,
} from '@interfaces';
import axios, { AxiosError } from 'axios';
import { createAsyncAction, ActionType } from 'typesafe-actions';
import createAsyncThunk from '@utils/createAsyncThunk';
import {
  CONTENT_POST,
  CONTENT_POST_ERROR,
  CONTENT_POST_SUCCESS,
  CONTENT_GET,
  CONTENT_GET_ERROR,
  CONTENT_GET_SUCCESS,
  CONTENT_SEARCH_GET,
  CONTENT_SEARCH_GET_ERROR,
  CONTENT_SEARCH_GET_SUCCESS,
} from '../actionTypes';

export const postContentAsync = createAsyncAction(
  CONTENT_POST,
  CONTENT_POST_SUCCESS,
  CONTENT_POST_ERROR
)<null, PostContentResponse, AxiosError>();

export const getContentAsync = createAsyncAction(
  CONTENT_GET,
  CONTENT_GET_SUCCESS,
  CONTENT_GET_ERROR
)<null, GetContentResponse, AxiosError>();

export const getSearchResultsAsync = createAsyncAction(
  CONTENT_SEARCH_GET,
  CONTENT_SEARCH_GET_SUCCESS,
  CONTENT_SEARCH_GET_ERROR
)<null, GetSearchResultsResponse, AxiosError>();

const actions = {
  postContentAsync,
  getContentAsync,
  getSearchResultsAsync,
};

export type contentAction = ActionType<typeof actions>;

export const postContentRequest = async (formdata: FormData) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.post<PostContentResponse>(
    `${API_ENDPOINT}/contents`,
    formdata,
    {
      headers: {
        authorization: token,
      },
    }
  );
  return result.data;
};

export const getContentRequest = async (id: string) => {
  const result = await axios.get<GetContentResponse>(
    `${API_ENDPOINT}/contents?id=${id}`
  );
  return result.data;
};

export const getSearchResultsRequest = async (
  artistId: string,
  location: string,
  dateStart: string,
  dateEnd: string
) => {
  const result = await axios.get<GetSearchResultsResponse>(
    `${API_ENDPOINT}/contents/query?artistId=${artistId}&location=${location}&dateStart=${dateStart}&dateEnd=${dateEnd}`
  );
  return result.data;
};

export const postContentThunk = createAsyncThunk(
  postContentAsync,
  postContentRequest
);
export const getContentThunk = createAsyncThunk(
  getContentAsync,
  getContentRequest
);
export const getSearchResultsThunk = createAsyncThunk(
  getSearchResultsAsync,
  getSearchResultsRequest
);
