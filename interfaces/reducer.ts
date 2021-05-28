import { AsyncState } from '@utils/reducerUtils';

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_API}`;

export interface User {
  id: string;
  type?: string;
  profileImage: string;
  userName: string;
  email: string;
  passwordUpdate?: string;
}
export interface Artist {
  id: string;
  name: string;
  group: string | null;
  profileImage: string;
  isFollow?: boolean;
}
export interface signup {
  email: string;
  password: string;
  username: string;
}
export interface SharedContent {
  id: string;
  content: Content[];
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
  id: string;
  artist: string;
  title: string;
  tags: string[];
  description: string;
  images: Image[];
  date: Date;
  time: Time;
  address: Address;
  mobile: string;
  perks: Perks;
  isBookmark: boolean;
  author: Author;
}

export interface Author {
  userId: string;
  username: string;
  profileImage: string;
}

export type Image = string;
export interface Date {
  start: string | undefined;
  end: string | undefined;
}
export interface Time {
  open: string;
  close: string;
}

export interface Latlng {
  lat: number;
  lng: number;
}
export interface Address {
  storeName: string;
  roadAddress: string;
  location: Latlng;
}
export interface Perks {
  bus: boolean;
  subway: boolean;
  train: boolean;
  elevator: boolean; // sort
  baby: boolean;
  parking: boolean;
  pet: boolean; // cat
  [prop: string]: boolean;
}

export interface PerkList {
  [prop: string]: any;
}

export interface IComment {
  id: string;
  author: Author;
  comments: string;
  createdAt: string;
}

export interface CommentListResponse {
  comments: IComment[];
}

export interface PostCommentReqBody {
  contentsId: string;
  comment: string;
}
export interface PutCommentReqBody {
  id: string;
  comment: string;
}
export interface ContentQuery {
  artistName: string;
  artistGroup: string;
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
export type GetContentPathResponse = AxiosResponse<SharedContent[]>;
export type GetUserContentResponse = AxiosResponse<Content[]>;
export type GetBookmarkResponse = AxiosResponse<Content[]>;
export type GetFollowResponse = AxiosResponse<Artist[]>;
// comment
export type GetCommentListResponse = AxiosResponse<CommentListResponse>;
export type PostCommentResponse = AxiosResponse<IComment>;

export interface UserState {
  userProfile: AsyncState<User>;
  bookmarks: AsyncState<Content[]>;
  contents: AsyncState<Content[]>;
  follows: AsyncState<Artist[]>;
  paths: AsyncState<SharedContent[]>;
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

export interface CommentReducer {
  list: AsyncState<IComment[]>;
  current: AsyncState<IComment>;
  create: AsyncState<IComment>;
  update: AsyncState<{ message: string }>;
  delete: AsyncState<{ message: string }>;
}
