import { AsyncState } from '@utils/reducerUtils';

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_API}`;
export interface LoginResponse {
  result: { accessToken: string };
  message: string;
}
export interface User {
  username: string;
  email: string;
  profileImage: string;
}

export interface UserState {
  userProfile: AsyncState<User>;
}
export interface signup {
  email: string;
  password: string;
  username: string;
}
export interface authReducer {
  signup: AsyncState<{ message: string }>;
  signout: AsyncState<{ message: string }>;
  checkps: AsyncState<{ message: string }>;
  updateps: AsyncState<{ message: string }>;
  login: AsyncState<{ accessToken: string }>;
}

// content
export interface PostContentResponse {
  result: { id: string };
  message: string;
}

export interface GetContentResponse {
  result: Content;
  message: string;
}

export interface GetSearchResultsResponse {
  result: SearchResult[];
  message: string;
}

export interface SearchResult {
  id: string;
  date: Date;
  time: Time;
  address: Address;
  title: string;
  images: string[];
}

export interface Content {
  artist: string;
  title: string;
  tags: string[];
  description: string;
  images: string[];
  date: Date;
  time: Time;
  address: Address;
  mobile: string;
  perks: Perks;
}

export interface Date {
  start: string | undefined;
  end: string | undefined;
}
export interface Time {
  open: string;
  close: string;
}
export interface Address {
  storeName: string;
  roadAddress: string;
  lat: number;
  lng: number;
}
export interface Perks {
  bus: boolean;
  subway: boolean;
  train: boolean;
  elevator: boolean;
  baby: boolean;
  parking: boolean;
}

export interface PostContentResponse {
  artist: string;
  title: string;
  tags: string[];
  description: string;
  images: string;
}

export interface contentReducer {
  getcontent: AsyncState<{ message: string }>;
  postcontent: AsyncState<{ message: string }>;
  getsearchresults: AsyncState<{ message: string }>;
}
