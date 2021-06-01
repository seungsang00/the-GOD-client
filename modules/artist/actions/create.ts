import { API_ENDPOINT, CreateArtistResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  ARTIST_POST,
  ARTIST_POST_ERROR,
  ARTIST_POST_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const createArtistAsync = createAsyncAction(
  ARTIST_POST,
  ARTIST_POST_ERROR,
  ARTIST_POST_SUCCESS
)<null, CreateArtistResponse, AxiosError>();

export const createArtistRequest = async ({
  name,
  group,
}: {
  name: string;
  group: string;
}) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.post<CreateArtistResponse>(
    `${API_ENDPOINT}/artist`,
    { name, group },
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const createArtistThunk = createAsyncThunk(
  createArtistAsync,
  createArtistRequest
);
