import { AccountOptionsProps } from '@interfaces';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FlyoutContainer } from './AccountOptionsFlyout.style';

const AccountOptionsFlyout = ({
  handler,
}: AccountOptionsProps): ReactElement => {
  const logouthandler = () => {
    window.localStorage.removeItem('accessToken');
    // FIXME: 로컬스토리지가 변한 것을 페이지가 바로 인식하지 못합니다. 강제 새로고침 말고 다른 방법은 없을까요?
    document.location.href = '/';
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
