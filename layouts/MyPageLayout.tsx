import React, { ReactNode } from 'react';
import { MyPageStyle } from './layouts.style';

type Props = {
  children?: ReactNode;
};

const MyPageLayout = ({ children }: Props) => (
  <MyPageStyle>{children}</MyPageStyle>
);

export default MyPageLayout;
