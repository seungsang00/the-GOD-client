import { Button, ThemeToggleButton } from '@components';
import { AuthModal } from '@containers';
import {
  AccountOptionsButton,
  AccountOptionsFlyout,
} from 'components/AccountOptions';
import useFlyout from 'hooks/useFlyout';
import useModal from 'hooks/useModal';
import { RootState } from 'modules/reducer';
import Link from 'next/link';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer } from './Header.style';

interface HeaderProps {
  logo?: ReactNode;
  avatar: ReactNode;
}
const Header = ({ logo, avatar }: HeaderProps): ReactElement => {
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  const { isOpen, flyoutController } = useFlyout(false);
  const { isOpen: isAuthModalOpen, modalController } = useModal();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [data]);

  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <Link href="/">
            <a>
              {logo && logo} <h3>FansSum</h3>
            </a>
          </Link>
        </div>
        <nav className="gnb">
          <ThemeToggleButton />
          {isLogin ? (
            <>
              {avatar}
              <AccountOptionsButton handler={flyoutController} />
              {isOpen && <AccountOptionsFlyout handler={flyoutController} />}
            </>
          ) : (
            <div className="auth-modal-trigger">
              <Button
                disabled={false}
                text="로그인"
                handler={modalController}
              />
              <AuthModal isOpen={isAuthModalOpen} handler={modalController} />
            </div>
          )}
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
