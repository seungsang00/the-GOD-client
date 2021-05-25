import { KakaoLoginButton } from '@components';
import React from 'react';

const KakaoLoader = () => {
  const kakaoHandler = () => {
    const KAKAO_ENDPOINT = `https://kauth.kakao.com/client/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
    if (window) window.open(KAKAO_ENDPOINT, '_blank');
  };
  return <KakaoLoginButton onClick={kakaoHandler} />;
};
export default KakaoLoader;
