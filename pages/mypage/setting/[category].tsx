import React, { useEffect, useRef, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { Sidebar } from '@components';
import { useRouter } from 'next/dist/client/router';
import { AccountSettings, ProfileSettings } from '@containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getInfoThunk } from 'modules/user';

const SettingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { category } = router.query;
  // const { data: userInfo } = useSelector(
  //   (state: RootState) => state.user.userProfile
  // );
  const { data: usernameUpdateResponse } = useSelector(
    (state: RootState) => state.user.username
  );
  const { data: avatarUpdateResponse } = useSelector(
    (state: RootState) => state.user.profileImage
  );

  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleResize);
      const token = window.localStorage.getItem('accessToken');
      if (!token) router.push('/');
    }
    dispatch(getInfoThunk());
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getInfoThunk());
  }, [usernameUpdateResponse, avatarUpdateResponse]);

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
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}

          {category === 'profile' && <ProfileSettings />}
          {category === 'account-settings' && <AccountSettings />}
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default SettingPage;
