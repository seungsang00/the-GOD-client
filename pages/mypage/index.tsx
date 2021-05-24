import React, { useEffect, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { Avatar, DataNullLink } from '@components';
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

  const moveToFormPage = () => {
    router.push('/content/form');
  };

  // TODO: 스토어에서 유저정보를 불러온 값으로 변경
  const username = 'FakeUser01';
  const email = 'fakeuser01@fake.com';
  const profileImage = undefined;

  return (
    <Layout title={`MyPage | FansSum::팬심이 모여 문화가 되다`}>
      <MyPageLayout>
        {viewWidth && showMenu ? (
          <div id="userInfoLeft">
            <Avatar
              profileImage={profileImage || '/images/avatar_default.jpg'}
              size={5}
            />
            <h3>{username}</h3>
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
            <DataNullLink
              title="내가 팔로우 한 아티스트는 여기에서 확인할 수 있어요"
              description="아직 팔로우 한 아티스트가 없어요"
              buttonText="내 아티스트 찾으러가기"
              linkTo="/" // TODO: 어디로 보내야 할지 생각해보기
            />
          </section>
          <section>
            <h2>
              <a id="my-route">My Route</a>
            </h2>
            <DataNullLink
              title="내가 만든 루트를 모아볼 수 있어요"
              description="지금 나만의 루트를 만들고 공유해보세요!"
              buttonText="이벤트 찾으러가기"
              linkTo="/main"
            />
          </section>
          <section>
            <h2>
              <a id="my-post">My Post</a>
            </h2>
            <DataNullLink
              title="내가 등록한 컨텐츠를 모아볼 수 있어요"
              description="새로운 이벤트를 시작하셨면 지금 바로 공유해보세요!"
              buttonText="등록하러가기"
              linkTo="/content/form"
            />
          </section>
          <section>
            <h2>
              <a id="bookmark">Bookmark</a>
            </h2>
            <DataNullLink
              title="저장한 컨텐츠는 여기에서 확인할 수 있어요"
              description="아직 저장한 컨텐츠가 없어요"
              buttonText="이벤트 찾으러가기"
              linkTo="/main"
            />
          </section>
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default MyPage;
