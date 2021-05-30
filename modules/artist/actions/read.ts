import { API_ENDPOINT, GetArtistResponse } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  ARTIST_GET,
  ARTIST_GET_ERROR,
  ARTIST_GET_SUCCESS,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

export const getArtistAsync = createAsyncAction(
  ARTIST_GET,
  ARTIST_GET_ERROR,
  ARTIST_GET_SUCCESS
)<null, GetArtistResponse, AxiosError>();

export const getArtistRequest = async () => {
  const result = await axios.get<GetArtistResponse>(`${API_ENDPOINT}/artist`);
  return result.data;
};

export const getArtistThunk = createAsyncThunk(
  getArtistAsync,
  getArtistRequest
);
