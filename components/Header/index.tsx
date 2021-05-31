import { ThemeToggleButton } from '@components';
import {
  AccountOptionsButton,
  AccountOptionsFlyout,
} from 'components/AccountOptions';
import useFlyout from 'hooks/useFlyout';
import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import { HeaderContainer } from './Header.style';

interface HeaderProps {
  logo?: ReactNode;
  avatar: ReactNode;
}
const Header = ({ logo, avatar }: HeaderProps): ReactElement => {
  const { isOpen, flyoutController } = useFlyout(false);

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
          {avatar}
          <AccountOptionsButton handler={flyoutController} />
          {isOpen && <AccountOptionsFlyout handler={flyoutController} />}
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
