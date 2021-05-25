import { ActionType } from 'typesafe-actions';

export * from './kakao';
export * from './common';
export * from './twitter';
export * from './google';
export * from './email';

import { kakaoTokenAsync, kakaoAuthAsync } from './kakao';
import { googleAuthAsync } from './google';
import { twitterAuthAsync } from './twitter';
import { signoutAsync } from './common';
import { checkPSAsync, updatePSAsync, signupAsync, loginAsync } from './email';

const actions = {
  kakaoTokenAsync,
  kakaoAuthAsync,
  googleAuthAsync,
  twitterAuthAsync,
  signoutAsync,
  checkPSAsync,
  updatePSAsync,
  loginAsync,
  signupAsync,
};

export type AuthAction = ActionType<typeof actions>;
