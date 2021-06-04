import React, { ReactNode, MouseEvent, useEffect } from 'react';
import Head from 'next/head';
import { Avatar, Header } from '@components';
import { CommonLayoutStyle } from './layouts.style';
import { useRouter } from 'next/dist/client/router';
import useModal from 'hooks/useModal';
import { AuthModal } from '@containers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { tokenThunk } from 'modules/auth';

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
  const { isOpen, modalController, setIsOpen } = useModal();
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector(({ auth }: RootState) => auth);
  const { isExpire } = useSelector(({ auth }: RootState) => auth);

  useEffect(() => {
    if (isExpire) {
      dispatch(tokenThunk());
    }
  }, [isExpire]);

  useEffect(() => {
    console.log(token);
    if (token.error) {
      console.log('effect error,', token);
      localStorage.removeItem('accessToken');
      router.replace('/');
    }
  }, [token]);

  const { data } = useSelector((state: RootState) => state.user.userProfile);

  const handleAvatarClick = (e: MouseEvent) => {
    // TODO: 로그인 상태가 아니라면 로그인 모달 오픈
    if (!data) {
      modalController(e);
      console.log(`login first!`);
    } else {
      console.log('move to mypage!');
      router.push('/mypage');
    }
  };

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
      <AuthModal
        isOpen={isOpen}
        handler={modalController}
        setIsOpen={setIsOpen}
      />
      <CommonLayoutStyle>{children}</CommonLayoutStyle>
      {footer}
    </>
  );
};

export default Layout;
