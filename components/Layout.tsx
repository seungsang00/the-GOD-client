import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Avatar, Header } from '@components';

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: ReactNode;
};

const Layout = ({
  children,
  title = 'FansSum | 팬심이 모여 문화가 되다',
  footer,
}: Props) => {
  // const profileImage = 'https://bit.ly/3oqUbfM'; // FIXME: 스토어에서 유저의 프로필이미지를 받아와야 합니다
  const profileImage = undefined;

  const handleNavOpen = () => {
    // TODO: 메뉴 영역이 보이도록 컨트롤 하는 핸들러 함수 추가
    console.log('menu open');
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        gnb={
          <Avatar
            profileImage={profileImage ? profileImage : '/images/user.svg'}
            size={2.5}
            handler={handleNavOpen}
          />
        }
      />
      {children}
      {footer}
    </>
  );
};

export default Layout;
