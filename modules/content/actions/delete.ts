// TODO: 컨텐츠 삭제 미구현
import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  CONTENT_DELETE,
  CONTENT_DELETE_SUCCESS,
  CONTENT_DELETE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const deleteContentRequest = async (contentId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/content`,
    {
      headers: { authorization: `BEARER ${accessToken}` },
      data: { id: contentId },
    }
  );
  return result.data;
};

export const deleteContentAsync = createAsyncAction(
  CONTENT_DELETE,
  CONTENT_DELETE_SUCCESS,
  CONTENT_DELETE_ERROR
)<null, { message: string }, AxiosError>();

export const deleteContentThunk = createAsyncThunk(
  deleteContentAsync,
  deleteContentRequest
);
