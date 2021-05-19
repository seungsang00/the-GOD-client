import React, { ReactElement } from 'react';
import GuideStyle from './Guide.style';
import { GuideButtonProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Guide = ({
  active,
  resetHandler,
  activeHandler,
  shareHandler,
}: GuideButtonProps): ReactElement | null => {
  return (
    <GuideStyle active={active}>
      <button className="guide-root" onClick={activeHandler}>
        <FontAwesomeIcon icon="route" />
      </button>
      <div className="guide-active-box">
        <button className="guide-reset" onClick={resetHandler}>
          <FontAwesomeIcon icon="undo" />
        </button>
        <button className="guide-share" onClick={shareHandler}>
          <FontAwesomeIcon icon="share" />
        </button>
        <button className="guide-close" onClick={activeHandler}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </GuideStyle>
  );
};
export default Guide;
