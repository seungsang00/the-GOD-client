import { API_ENDPOINT, GetCommentListResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  COMMENT_LIST_GET,
  COMMENT_LIST_GET_SUCCESS,
  COMMENT_LIST_GET_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const getCommentListRequest = async (contentId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.get<GetCommentListResponse>(
    `${API_ENDPOINT}/comment?id=${contentId}`,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const getCommentListAsync = createAsyncAction(
  COMMENT_LIST_GET,
  COMMENT_LIST_GET_SUCCESS,
  COMMENT_LIST_GET_ERROR
)<null, GetCommentListResponse, AxiosError>();

export const getCommentListThunk = createAsyncThunk(
  getCommentListAsync,
  getCommentListRequest
);
