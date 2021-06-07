import {
  API_ENDPOINT,
  PostCommentReqBody,
  PostCommentResponse,
} from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  COMMENT_CREATE,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const createCommentRequest = async (comment: PostCommentReqBody) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.post<PostCommentResponse>(
    `${API_ENDPOINT}/comment`,
    comment,
    {
      headers: { authorization: `BEARER ${accessToken}` },
    }
  );
  return result.data;
};

export const createCommentAsync = createAsyncAction(
  COMMENT_CREATE,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_ERROR
)<null, PostCommentResponse, AxiosError>();

export const createCommentThunk = createAsyncThunk(
  createCommentAsync,
  createCommentRequest
);
