import React, { ReactElement } from 'react';
import { TopLinkStyle } from './ScrollToTopButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = (): ReactElement | null => {
  const handler = () => {};
  return (
    <TopLinkStyle onClick={handler}>
      <FontAwesomeIcon icon={faAngleDoubleUp} />
      <span>TOP</span>
    </TopLinkStyle>
  );
};
export default ScrollToTopButton;
