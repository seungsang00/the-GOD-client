import React, { ReactElement } from 'react';
import { BadgeProps } from 'interfaces/props';
import { BadgeContainer } from './Badge.style';

const Badge = ({ children }: BadgeProps): ReactElement => {
  return <BadgeContainer className="badge">{children}</BadgeContainer>;
};

export default Badge;
