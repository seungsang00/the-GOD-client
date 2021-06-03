import { AsyncState } from '@utils/reducerUtils';

export const API_ENDPOINT = `https://${process.env.NEXT_PUBLIC_API}`;

export interface User {
  id: string;
  type?: string;
  profileImage: string;
  name: string;
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

export type Artists = (IGroupArtist | IArtist)[];

export interface IGroupArtist extends IArtist {
  type: 'group';
  member: IMember[];
}
export interface IArtist extends IMember {
  type: 'group' | 'solo';
}
export interface IMember {
  id: string;
  name: string;
  profileImage: string;
}

export interface signup {
  email: string;
  password: string;
  name: string;
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
  artist: Artist;
  title: string;
  tags: string[];
  description: string;
  images: Image[];
  date: Date;
  time: Time;
  address: Address;
  mobile: string;
  perks: Perks;
  isBookmark?: boolean;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
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
  sort: boolean;
  baby: boolean;
  parking: boolean;
  cat: boolean;
  readonly [x: string]: boolean;
}

export interface PerkList {
  [prop: string]: any;
}

export interface IComment {
  id: string;
  user: Author;
  comment: string;
  createdAt: string;
}

export interface CommentListResponse {
  comments: IComment[];
}

export interface PostCommentReqBody {
  id: string; // contentId
  comment: string;
}
export interface PutCommentReqBody {
  id: string;
  comment: string;
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
export type PostSharedContentResponse = AxiosResponse<{ id: string }>;
export type PutContentResponse = AxiosResponse<Content>;
export type PutFollowResponse = AxiosResponse<{ isFollow: boolean }>;
export type PutBookmarkResponse = AxiosResponse<{ isBookmarked: boolean }>;
// user
export type GetInfoResponse = AxiosResponse<User>;
export type PutInfoResponse = AxiosResponse<User>;
export type PutProfileImageResponse = AxiosResponse<{
  profileImg: string;
}>;
export type GetContentListResponse = AxiosResponse<{
  contents: Content[];
  totalPage: number;
  currentPage: number;
  dataPerPage: number;
}>;
export type GetSharedContentResponse = AxiosResponse<{
  id: string;
  contents: Content[];
}>;
export type GetContentPathResponse = AxiosResponse<SharedContent[]>;
export type GetUserContentResponse = AxiosResponse<Content[]>;
export type GetBookmarkResponse = AxiosResponse<Content[]>;
export type GetFollowResponse = AxiosResponse<Artist[]>;
// comment
export type GetCommentListResponse = AxiosResponse<CommentListResponse>;
export type PostCommentResponse = AxiosResponse<IComment>;
//
export type CreateArtistResponse = AxiosResponse<{ message: string }>;
export type UpdateArtistResponse = AxiosResponse<{
  id: string;
  name: string;
  group: string;
}>;
export type GetArtistResponse = AxiosResponse<Artists>;
export type DeleteArtistResponse = AxiosResponse<{ message: string }>;
export interface UserState {
  userProfile: AsyncState<User>;
  profileImage: AsyncState<{ profileImage: string }>;
  username: AsyncState<{ message: string }>;
  bookmarks: AsyncState<Content[]>;
  bookmark: AsyncState<{ isBookmarked: boolean }>;
  contents: AsyncState<Content[]>;
  follows: AsyncState<Artist[]>;
  paths: AsyncState<SharedContent[]>;
}
export interface AuthReducer {
  signup: AsyncState<{ message: string }>;
  signout: AsyncState<{ message: string }>;
  checkps: AsyncState<{ message: string }>;
  updateps: AsyncState<{ passwordUpdate: string }>;
  login: AsyncState<{ accessToken: string }>;
  kakao: AsyncState<{ code: string; accessToken: string }>;
}
export interface ContentReducer {
  list: AsyncState<{
    contents: Content[];
    totalPage: number;
    currentPage: number;
    dataPerPage: number;
  }>;
  current: AsyncState<Content>;
  create: AsyncState<Content>;
  update: AsyncState<Content>;
  delete: AsyncState<{ message: string }>;
  shared: AsyncState<{ id: string }>;
  path: AsyncState<{ id: string; contents: Content[] }>;
  form: Content;
}
export interface ArtistReducer {
  create: AsyncState<{ message: string }>;
  update: AsyncState<{ message: string }>;
  delete: AsyncState<{ message: string }>;
  read: AsyncState<Artists>;
}

export interface CommentReducer {
  list: AsyncState<IComment[]>;
  current: AsyncState<IComment>;
  create: AsyncState<IComment>;
  update: AsyncState<{ message: string }>;
  delete: AsyncState<{ message: string }>;
}
