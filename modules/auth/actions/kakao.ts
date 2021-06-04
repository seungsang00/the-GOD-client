import { API_ENDPOINT } from '@interfaces';
import createAsyncThunk from '@utils/createAsyncThunk';
import axios, { AxiosError } from 'axios';
import qs from 'qs';
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
    qs.stringify({
      grant_type: `authorization_code`,
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
      client_secret: process.env.NEXT_PUBLIC_KAKAO_SECRET_ID,
      code: code,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
  );
  return result.data;
};

export const kakaoAuthRequest = async (token: string) => {
  const result = await axios.post<{
    result: { accessToken: string };
    message: string;
  }>(`${API_ENDPOINT}/auth/kakao`, { token });
  if (window)
    localStorage.setItem('accessToken', result.data.result.accessToken);
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
)<null, { result: { accessToken: string }; message: string }, AxiosError>();

export const kakaoTokenThunk = createAsyncThunk(
  kakaoTokenAsync,
  kakaoTokenRequest
);
export const kakaoAuthThunk = createAsyncThunk(
  kakaoAuthAsync,
  kakaoAuthRequest
);
