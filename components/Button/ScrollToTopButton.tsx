import React, { ReactElement } from 'react';
import { TopLinkStyle } from './ScrollToTopButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = (): ReactElement | null => {
  const handler = () => {
    document
      .querySelector('.mandatory-scroll-snapping')
      ?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <TopLinkStyle onClick={handler}>
      <FontAwesomeIcon icon={faAngleDoubleUp} />
      <span>TOP</span>
    </TopLinkStyle>
  );
};
export default ScrollToTopButton;
