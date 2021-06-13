import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { kakaoAuthThunk, kakaoTokenThunk } from 'modules/auth';
import { RootState } from 'modules/reducer';
import { Loading } from '@containers';

//TODO: Error 모달 추가 필요

// 1. 에러가 생기면 메인에서 표시한다. 또는 여기서 표시하고 나간다.

const Kakao = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    // loading: _,
    data,
    error,
  } = useSelector((state: RootState) => state.auth.kakao);
  const {
    // loading: _loginLoading,
    data: loginData,
    error: loginError,
  } = useSelector((state: RootState) => state.auth.login);
  const { code } = router.query as { code: string };
  useEffect(() => {
    if (code) {
      dispatch(kakaoTokenThunk(code));
    }
  }, [code]);
  useEffect(() => {
    if (data) {
      const { accessToken } = data;
      if (accessToken) {
        dispatch(kakaoAuthThunk(accessToken));
      }
    }
  }, [data]);
  useEffect(() => {
    if (error || loginError) {
      const kakaoPageError = error || loginError;
      alert(kakaoPageError);
      router.replace('/');
    }
  }, [error, loginError]);
  useEffect(() => {
    if (loginData) {
      router.replace('/');
    }
  }, [loginData]);
  return (
    <>
      <Loading />
    </>
  );
};
export default Kakao;
