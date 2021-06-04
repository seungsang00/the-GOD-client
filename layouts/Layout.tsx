import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { Avatar, Header } from '@components';
import { CommonLayoutStyle } from './layouts.style';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getInfoThunk } from 'modules/user';

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
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  const handleAvatarClick = () => {
    router.push('/mypage');
  };
  useEffect(() => {
    if (!data) dispatch(getInfoThunk());
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        avatar={
          <Avatar
            profileImage={
              (data && data.profileImage) || 'https://bit.ly/3euIgJj'
            }
            size={2}
            title="My Page"
            handler={handleAvatarClick}
          />
        }
      />
      <CommonLayoutStyle>{children}</CommonLayoutStyle>
      {footer}
    </>
  );
};

export default Layout;
