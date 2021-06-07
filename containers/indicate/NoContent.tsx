import { Button } from '@components';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { Wrapper } from './indicate.style';

const NoContent = (): ReactElement => {
  const router = useRouter();
  const moveToFormPage = () => {
    router.push('/content/form');
  };
  return (
    <Wrapper>
      <h1>검색 결과가 없습니다</h1>
      <p>내 아티스트를 위한 이벤트를 등록해보시겠어요?</p>
      <Button
        disabled={false}
        text="이벤트 등록하러 가기"
        handler={moveToFormPage}
      />
    </Wrapper>
  );
};

export default NoContent;
