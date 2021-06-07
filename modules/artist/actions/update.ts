import { API_ENDPOINT, UpdateArtistResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  ARTIST_UPDATE,
  ARTIST_UPDATE_ERROR,
  ARTIST_UPDATE_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const updateArtistAsync = createAsyncAction(
  ARTIST_UPDATE,
  ARTIST_UPDATE_ERROR,
  ARTIST_UPDATE_SUCCESS
)<null, UpdateArtistResponse, AxiosError>();

export const updateArtistRequest = async ({
  id,
  name,
  group,
}: {
  id: string;
  name: string;
  group: string;
}) => {
  const token: string | null = localStorage.getItem('accessToken');
  const result = await axios.put<UpdateArtistResponse>(
    `${API_ENDPOINT}/artist`,
    { id, name, group },
    {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const updateArtistThunk = createAsyncThunk(
  updateArtistAsync,
  updateArtistRequest
);
