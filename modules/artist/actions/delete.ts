import { API_ENDPOINT, DeleteArtistResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  ARTIST_DELETE,
  ARTIST_DELETE_ERROR,
  ARTIST_DELETE_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const deleteArtistAsync = createAsyncAction(
  ARTIST_DELETE,
  ARTIST_DELETE_ERROR,
  ARTIST_DELETE_SUCCESS
)<null, DeleteArtistResponse, AxiosError>();

export const deleteArtistRequest = async () => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.delete<DeleteArtistResponse>(
    `${API_ENDPOINT}/artist`,
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const deleteArtistThunk = createAsyncThunk(
  deleteArtistAsync,
  deleteArtistRequest
);
