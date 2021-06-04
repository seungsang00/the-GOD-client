import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { Wrapper } from './indicate.style';

const Loading = (): ReactElement => {
  return (
    <Wrapper>
      <h1>
        <FontAwesomeIcon icon={faHeart} />
      </h1>
      <p>데이터를 불러오고 있어요...</p>
    </Wrapper>
  );
};

export default Loading;
