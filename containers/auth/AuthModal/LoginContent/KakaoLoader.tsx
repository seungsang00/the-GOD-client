import { KakaoLoginButton } from '@components';
import React from 'react';

const KakaoLoader = () => {
  const kakaoHandler = () => {
    const BASE_URL = 'https://kauth.kakao.com/client/oauth/authorize?';
    const CLIENT_ID = `client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`;
    const REDIRECT_URI = `redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;
    const KAKAO_ENDPOINT = `${BASE_URL}&${CLIENT_ID}&${REDIRECT_URI}&response_type=code`;
    if (window) window.open(KAKAO_ENDPOINT, '_blank');
  };
  return <KakaoLoginButton onClick={kakaoHandler} />;
};
export default KakaoLoader;
