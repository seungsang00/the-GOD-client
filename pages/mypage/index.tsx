import React, { useEffect, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import {
  ArtistLoader,
  ContentLoader,
  Loading,
  PathContentLoader,
} from '@containers';
import { Avatar } from '@components';
import {
  getBookmarksThunk,
  getFollowsThunk,
  getMyContentThunk,
  getPathThunk,
} from 'modules/user';

const MyPage = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState<boolean | null>(null);
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const { follows, paths, userProfile, bookmarks, contents } = useSelector(
    ({ user }: RootState) => user
  );

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    dispatch(getMyContentThunk());
    dispatch(getFollowsThunk());
    dispatch(getPathThunk());
    dispatch(getBookmarksThunk());
    if (window) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setViewWidth(window.innerWidth);

    if (viewWidth && viewWidth > 925) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [viewWidth]);
  if (!follows.data || !paths.data || !bookmarks.data || !contents.data) {
    return <Loading />;
  }
  return (
    <Layout title={`MyPage | FansSum::팬심이 모여 문화가 되다`}>
      <MyPageLayout>
        {viewWidth && showMenu ? (
          <div id="userInfoLeft">
            <div className="profile-image">
              <Avatar
                profileImage={
                  userProfile.data?.profileImage || '/images/avatar_default.jpg'
                }
                type="square"
                size={7}
              />
            </div>
            <p className="email">{userProfile.data?.email}</p>
            <h3>
              <span className="username">{userProfile.data?.name}</span>님
            </h3>
            <h3 className="hello">덕질하기 좋은 날이죠?</h3>
          </div>
        ) : null}
        <main>
          {viewWidth && viewWidth <= 925 && (
            <div>
              <div id="userInfoTop">
                <Avatar
                  profileImage={
                    userProfile.data?.profileImage ||
                    '/images/avatar_default.jpg'
                  }
                  type="square"
                  size={3}
                />
                <div className="text">
                  <h2>{userProfile.data?.name}</h2>
                  <p className="email">{userProfile.data?.email}</p>
                </div>
              </div>
            </div>
          )}
          <section>
            <h2>
              <a id="my-artist">My Artist</a>
            </h2>
            <div className="contents">
              <ArtistLoader data={follows.data} />
            </div>
          </section>
          <section>
            <h2>
              <a id="my-route">My Route</a>
            </h2>
            <div className="contents">
              <PathContentLoader data={paths.data} />
            </div>
          </section>
          <section>
            <h2>
              <a id="my-post">My Post</a>
            </h2>
            <div className="contents">
              <ContentLoader data={contents.data} type="myContent" />
            </div>
          </section>
          <section>
            <h2>
              <a id="bookmark">Bookmark</a>
            </h2>
            <div className="contents">
              <ContentLoader data={bookmarks.data} type="bookmarks" />
            </div>
          </section>
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default MyPage;
