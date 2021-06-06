import { Button } from '@components';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { Wrapper } from './indicate.style';

const Error = (): ReactElement => {
  const router = useRouter();
  const moveToFormPage = () => {
    router.push('/');
  };
  return (
    <Wrapper>
      <h1 className="error-image">
        <img src="/images/404error.svg" />
      </h1>
      <Button
        disabled={false}
        text="메인으로 돌아가기"
        handler={moveToFormPage}
      />
    </Wrapper>
  );
};

export default Error;
