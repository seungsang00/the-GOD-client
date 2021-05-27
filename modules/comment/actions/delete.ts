import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  COMMENT_DELETE,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const deleteCommentRequest = async (commentId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  const result = await axios.delete<{ message: string }>(
    `${API_ENDPOINT}/comments`,
    {
      headers: { authorization: accessToken },
      data: { id: commentId },
    }
  );
  return result.data;
};

export const deleteCommentAsync = createAsyncAction(
  COMMENT_DELETE,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_ERROR
)<null, { message: string }, AxiosError>();

export const deleteCommentThunk = createAsyncThunk(
  deleteCommentAsync,
  deleteCommentRequest
);
