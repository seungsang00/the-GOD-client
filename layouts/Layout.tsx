import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { Avatar, Header, LogoIcon } from '@components';
import { CommonLayoutStyle } from './layouts.style';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getInfoThunk } from 'modules/user';
import { tokenThunk } from 'modules/auth';
import { getArtistThunk } from 'modules/artist';
import { setMetaTags } from '@utils/setMetaTags';

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
  const { data: artistData } = useSelector(
    ({ artist }: RootState) => artist.read
  );
  const { token } = useSelector(({ auth }: RootState) => auth);
  const { isExpire } = useSelector(({ auth }: RootState) => auth);

  useEffect(() => {
    if (isExpire) {
      dispatch(tokenThunk());
    }
  }, [isExpire]);
  useEffect(() => {
    if (!artistData) {
      dispatch(getArtistThunk());
    }
  }, [artistData]);

  useEffect(() => {
    if (token.error) {
      localStorage.removeItem('accessToken');
      router.replace('/');
    }
  }, [token]);

  const { data } = useSelector((state: RootState) => state.user.userProfile);
  const handleAvatarClick = () => {
    router.push('/mypage');
  };

  useEffect(() => {
    setMetaTags({
      title: '테스트 타이틀',
      description: '테스트 설명글',
      imageUrl: '/images/heart.svg',
    });
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken && !data) {
      dispatch(getInfoThunk());
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        logo={<LogoIcon size={2.7} />}
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
