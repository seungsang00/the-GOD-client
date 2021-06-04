import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Kakao = () => {
  // TODO: 로딩 페이지 들어가기
  const router = useRouter();
  useEffect(() => {
    if (router.query) {
      const { code } = router.query;
    }
  }, [router.query]);
  return <></>;
};

export default Kakao;
