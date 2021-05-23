import React, { useEffect, useRef, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { Sidebar } from '@components';
import { useRouter } from 'next/dist/client/router';
import AccountSettings from 'containers/account';

const SettingPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setViewWidth(window.innerWidth);

    if (viewWidth && viewWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [viewWidth]);

  const sidebarElement = useRef<HTMLDivElement | null>(null);

  const settingMenus = [
    { isLink: true, text: '프로필 수정', link: 'profile' },
    { isLink: true, text: '계정 설정', link: 'account-settings' },
  ];

  return (
    <Layout title={`회원정보수정 | FansSum::팬심이 모여 문화가 되다`}>
      <MyPageLayout>
        {viewWidth && showMenu ? (
          <Sidebar list={settingMenus} ref={sidebarElement} />
        ) : null}
        <main>
          {viewWidth && viewWidth <= 768 && (
            <div
              id="settingCategoryHandler"
              onClick={() => setShowMenu(!showMenu)}
            >
              Button(뒤로가기 OR 햄버거)
            </div>
          )}

          {category === 'profile' && <div>프로필 세팅</div>}
          {category === 'account-settings' && <AccountSettings />}
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default SettingPage;
