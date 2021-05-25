import { AsyncState } from '@utils/reducerUtils';

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_API}`;

export interface User {
  username: string;
  email: string;
  profileImage: string;
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
// export interface Content {
//   artist: string;
//   title: string;
//   tags: string[];
//   description: string;
//   images: string[];
//   date: {
//     start: Date;
//     end: Date;
//   };
//   time: {
//     open: string;
//     close: string;
//   };
//   storeName: string;
//   roadAddress: string;
//   location: {
//     lat: number;
//     lng: number;
//   };
//   mobile: string;
//   perks: Perks;
// }

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
export type LoginResponse = AxiosResponse<{ accessToken: string }>;
export type GetContentResponse = AxiosResponse<Content>;
export type GetContentListResponse = AxiosResponse<Content[]>;
export type PostContentResponse = AxiosResponse<Content>;
export type PutContentResponse = AxiosResponse<Content>;
export type GetSearchResultsResponse = AxiosResponse<SearchResult[]>;
export type GetInfoResponse = AxiosResponse<User>;

export interface UserState {
  userProfile: AsyncState<User>;
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
