import { LogoIcon } from '@components';
import React, { ReactElement } from 'react';
import { Wrapper } from './indicate.style';

const Loading = (): ReactElement => {
  return (
    <Wrapper>
      <h1 className="icon">
        <LogoIcon size={5} />
      </h1>
      <p>데이터를 불러오고 있어요</p>
    </Wrapper>
  );
};

export default Loading;
