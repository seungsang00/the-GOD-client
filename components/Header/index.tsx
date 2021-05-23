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
              {logo && logo} <h1>FansSum</h1>
            </a>
          </Link>
        </div>
        <nav className="gnb">
          {avatar}
          <AccountOptionsButton handler={flyoutController} />
        </nav>
      </HeaderContainer>
      {isOpen && <AccountOptionsFlyout handler={flyoutController} />}
    </>
  );
};

export default Header;
