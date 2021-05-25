import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import {
  AUTH_KAKAO_TOKEN,
  AUTH_KAKAO_TOKEN_SUCCESS,
  AUTH_KAKAO_TOKEN_ERROR,
  AUTH_KAKAO,
  AUTH_KAKAO_SUCCESS,
  AUTH_KAKAO_ERROR,
} from 'modules/actionTypes';
import { createAsyncAction } from 'typesafe-actions';

const KAKAO_OAUTH_URI = `https://kauth.kakao.com`;

interface TokenResponse {
  token_type: string;
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: string;
}

export const kakaoTokenRequest = async (code: string) => {
  const result = await axios.post<TokenResponse>(
    `${KAKAO_OAUTH_URI}/oauth/token`,
    {
      grant_type: `authorization_code`,
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
      code: code,
    }
  );
  return result.data;
};

export const kakaoAuthRequest = async (token: string) => {
  const result = await axios.post<{ token: string }>(
    `${API_ENDPOINT}/auth/kakao`,
    { token }
  );
  return result.data;
};
export const kakaoTokenAsync = createAsyncAction(
  AUTH_KAKAO_TOKEN,
  AUTH_KAKAO_TOKEN_SUCCESS,
  AUTH_KAKAO_TOKEN_ERROR
)<null, TokenResponse, AxiosError>();

export const kakaoAuthAsync = createAsyncAction(
  AUTH_KAKAO,
  AUTH_KAKAO_SUCCESS,
  AUTH_KAKAO_ERROR
)<null, { token: string }, AxiosError>();

export const kakaoTokenThunk = createAsyncThunk(
  kakaoTokenAsync,
  kakaoTokenRequest
);
export const kakaoAuthThunk = createAsyncThunk(
  kakaoAuthAsync,
  kakaoAuthRequest
);
