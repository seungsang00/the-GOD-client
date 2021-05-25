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
  kakao: AsyncState<{ code: string; accessToken: string }>;
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
export interface Content {
  artist: string;
  title: string;
  tags: string[];
  description: string;
  images: string[];
  date: {
    start: Date;
    end: Date;
  };
  time: {
    open: string;
    close: string;
  };
  storeName: string;
  roadAddress: string;
  location: {
    lat: number;
    lng: number;
  };
  mobile: string;
  perks: Perks;
}
