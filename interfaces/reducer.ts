import { AsyncState } from '@utils/reducerUtils';

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_API}`;

export interface User {
  type?: string;
  profileImage: string;
  userName: string;
  email: string;
  passwordUpdate?: string;
}
export interface Artist {
  id?: number;
  name: string;
  group: string;
  profileImage: string;
  isFollow?: boolean;
}
export interface signup {
  email: string;
  password: string;
  username: string;
}

export interface Perks {
  parking: boolean;
  baby: boolean;
  pet: boolean;
  subway: boolean;
  train: boolean;
  airport: boolean;
  taxi: boolean;
}
// content
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
export interface ContentQuery {
  artistId: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}
export type AxiosResponse<T> = {
  result: T;
  message: string;
};
// auth
export type LoginResponse = AxiosResponse<{ accessToken: string }>;
export type GetContentResponse = AxiosResponse<Content>;
// content
export type GetSearchResultsResponse = AxiosResponse<SearchResult[]>;
export type PostContentResponse = AxiosResponse<Content>;
export type PutContentResponse = AxiosResponse<Content>;
export type PutFollowResponse = AxiosResponse<{ isFollow: boolean }>;
export type PutBookmarkResponse = AxiosResponse<{ isBookmark: boolean }>;
// user
export type GetInfoResponse = AxiosResponse<User>;
export type PutInfoResponse = AxiosResponse<User>;
export type GetContentListResponse = AxiosResponse<Content[]>;
export type GetUserContentResponse = AxiosResponse<Content[]>;
export type GetBookmarkResponse = AxiosResponse<Content[]>;
export type GetFollowResponse = AxiosResponse<Artist[]>;

export interface UserState {
  userProfile: AsyncState<User>;
  bookmarks: AsyncState<Content[]>;
  contents: AsyncState<Content[]>;
  follows: AsyncState<Artist[]>;
}
export interface AuthReducer {
  signup: AsyncState<{ message: string }>;
  signout: AsyncState<{ message: string }>;
  checkps: AsyncState<{ message: string }>;
  updateps: AsyncState<{ message: string }>;
  login: AsyncState<{ accessToken: string }>;
  kakao: AsyncState<{ code: string; accessToken: string }>;
}
export interface ContentReducer {
  list: AsyncState<Content[]>;
  current: AsyncState<Content>;
  create: AsyncState<Content>;
  update: AsyncState<Content>;
  delete: AsyncState<{ message: string }>;
}
