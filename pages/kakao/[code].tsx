import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { kakaoAuthThunk, kakaoTokenThunk } from 'modules/auth';
import { RootState } from 'modules/reducer';

//TODO: Error 모달 추가 필요

// 1. 에러가 생기면 메인에서 표시한다. 또는 여기서 표시하고 나간다.

const KakaoAuth = () => {
  const router = useRouter();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.auth.kakao
  );
  const { code } = router.query as { code: string };
  useEffect(() => {
    if (code) kakaoTokenThunk(code);
  });
  useEffect(() => {
    if (data) {
      const { accessToken } = data;
      if (accessToken) {
        kakaoAuthThunk(accessToken);
      }
    }
    if (error) {
      alert(error);
    }
  }, [data, error]);
  useEffect(() => {
    if (!loading) {
      router.push('/');
    }
  }, [loading]);
  return <>kakao loding</>;
};
export default KakaoAuth;
