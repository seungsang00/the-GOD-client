import React, { ReactElement } from 'react';
import { BadgeProps } from 'interfaces/props';
import { BadgeContainer } from './Badge.style';

const Badge = ({ children, textcolor, bgcolor }: BadgeProps): ReactElement => {
  return (
    <BadgeContainer className="badge" textcolor={textcolor} bgcolor={bgcolor}>
      {children}
    </BadgeContainer>
  );
};

export default Badge;
