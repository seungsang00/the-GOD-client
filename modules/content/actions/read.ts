import { API_ENDPOINT, Content } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_GET,
  CONTENT_GET_SUCCESS,
  CONTENT_GET_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const getContentRequest = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.get<Content>(`${API_ENDPOINT}/content?id=${id}`, {
    headers: { authorization: accessToken },
  });
  return result.data;
};

export const getContentAsync = createAsyncAction(
  CONTENT_GET,
  CONTENT_GET_SUCCESS,
  CONTENT_GET_ERROR
)<null, Content, AxiosError>();

export const getContentThunk = createAsyncThunk(
  getContentAsync,
  getContentRequest
);
