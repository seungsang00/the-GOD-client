import { Button, ThemeToggleButton, SearchTrigger, Modal } from '@components';
import { AuthModal, MainSearchForm } from '@containers';
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
import { HeaderContainer, SearchField } from './Header.style';

interface HeaderProps {
  logo?: ReactNode;
  avatar: ReactNode;
}
const Header = ({ logo, avatar }: HeaderProps): ReactElement => {
  // 검색 필드 확장
  const { isOpen: isExpanded, modalController: searchFieldHandler } =
    useModal();

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

  useEffect(() => {
    if (document) {
      // FIXME: 스크롤 이벤트를 인지하지 못하면서 헤더가 사라지는 효과가 적용되지 않음. 수정필요
      document.addEventListener('scroll', () => searchFieldHandler(undefined));
      const modalOverlay = document.querySelector('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.addEventListener('onwheel', () => console.log('wheel'));
      }
    }
  });

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
        {!isExpanded && <SearchTrigger handler={searchFieldHandler} />}
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
      <SearchField>
        <Modal
          isOpen={isExpanded}
          component={<MainSearchForm />}
          handler={searchFieldHandler}
        />
      </SearchField>
    </>
  );
};

export default Header;
