import React, { useEffect, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { Avatar } from '@components';
import { useRouter } from 'next/dist/client/router';

const MyPage = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    console.dir(router);
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

  // TODO: 스토어에서 유저정보를 불러온 값으로 변경
  const username = 'FakeUser01';
  const email = 'fakeuser01@fake.com';
  const profileImage = undefined;

  return (
    <Layout title={`MyPage | FansSum::팬심이 모여 문화가 되다`}>
      <MyPageLayout>
        {viewWidth && showMenu ? (
          <div>
            <Avatar
              profileImage={profileImage || '/images/avatar_default.jpg'}
              size={5}
            />
            <div>{username}</div>
            <span>{email}</span>
          </div>
        ) : null}
        <main>
          {viewWidth && viewWidth <= 768 && (
            <div>
              <div id="userInfoTop">
                <Avatar profileImage="/images/avatar_default.jpg" size={3} />
                <div className="text">
                  <h2>{username}</h2>
                  <span>{email}</span>
                </div>
              </div>
            </div>
          )}
          <section>
            <h2>
              <a id="my-artist">My Artist</a>
            </h2>
          </section>
          <section>
            <h2>
              <a id="my-route">My Route</a>
            </h2>
          </section>
          <section>
            <h2>
              <a id="my-post">My Post</a>
            </h2>
          </section>
          <section>
            <h2>
              <a id="bookmark">Bookmark</a>
            </h2>
          </section>
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default MyPage;
