import { AccountOptionsProps } from '@interfaces';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FlyoutContainer } from './AccountOptionsFlyout.style';

const AccountOptionsFlyout = ({
  handler,
}: AccountOptionsProps): ReactElement => {
  const logouthandler = () => {
    window.localStorage.removeItem('accessToken');
    document.location.href = '/';
  };
  return (
    <FlyoutContainer className="flyout-overlay" onClick={handler}>
      <div id="AccountOptionsFlyout" className="flyout-content">
        <section className="account-options">
          <ul className="account-options">
            <Link href="/content/form">
              <li className="account-option">
                <a>
                  <span>이벤트 등록하기</span>
                </a>
              </li>
            </Link>
            <Link href="/mypage/setting/profile">
              <li className="account-option">
                <a>
                  <span>설정</span>
                </a>
              </li>
            </Link>
            <li className="account-option" onClick={logouthandler}>
              <span>로그아웃</span>
            </li>
          </ul>
        </section>
      </div>
    </FlyoutContainer>
  );
};

export default AccountOptionsFlyout;
