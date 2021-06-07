import { API_ENDPOINT, PutCommentReqBody } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  COMMENT_UPDATE,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const updateCommentRequest = async (comment: PutCommentReqBody) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.put<{ message: string }>(
    `${API_ENDPOINT}/comment`,
    comment,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const updateCommentAsync = createAsyncAction(
  COMMENT_UPDATE,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_ERROR
)<null, { message: string }, AxiosError>();

export const updateCommentThunk = createAsyncThunk(
  updateCommentAsync,
  updateCommentRequest
);
