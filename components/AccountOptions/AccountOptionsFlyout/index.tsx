import { AccountOptionsProps } from '@interfaces';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FlyoutContainer } from './AccountOptionsFlyout.style';

const AccountOptionsFlyout = ({
  handler,
}: AccountOptionsProps): ReactElement => {
  const logouthandler = () => {
    // TODO: 로그아웃 요청
    console.log(`logout!`);
  };
  return (
    <FlyoutContainer className="flyout-overlay" onClick={handler}>
      <div id="AccountOptionsFlyout" className="flyout-content">
        <section className="account-options">
          {/* <div>section title</div> */}
          <ul className="account-options">
            <Link href="/mypage/setting/profile">
              <li className="account-option">
                <a>
                  <span>설정</span>
                </a>
              </li>
            </Link>
            <li className="account-option">
              <Link href="/about">
                <a>
                  <span>문의</span>
                </a>
              </Link>
            </li>
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
