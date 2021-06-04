import React, { ReactElement, useEffect, useState } from 'react';
import {
  Badge,
  BookmarkButton,
  InfoListItem,
  PerkBadge,
  Carousel,
  Avatar,
  Flyout,
  PopupNoTitle,
} from '@components';

import {
  faEllipsisV,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faClock,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  Author,
  ContentPageStyle,
  ImageSection,
  InfoSection,
  SectionStyle,
} from './ContentPageContainer.style';
import { Content } from '@interfaces';
import { Comments } from '@containers';
import { useRouter } from 'next/router';
import LocationInfo from './LocationInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFlyout from 'hooks/useFlyout';
import useModal from 'hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoThunk, updateBookmarkThunk } from 'modules/user';
import { RootState } from 'modules/reducer';
import { deleteContentThunk } from 'modules/content';

const ContentPageContainer = ({
  artist,
  title,
  tags,
  description,
  images,
  date,
  time,
  address,
  mobile,
  author,
  perks,
  isBookmark,
}: Content): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen, flyoutController } = useFlyout(false);
  const { isOpen: popupIsOpen, modalController } = useModal();
  const [bookmarked, setBookmarked] = useState<boolean | undefined>(isBookmark);

  const { id } = router.query as { id: string };
  const { start, end } = date;
  const { open, close } = time;
  const { storeName, roadAddress, location } = address;
  const { name, profileImage } = author;
  const artistName = `${artist.group !== null ? artist.group + ' ' : ''}${
    artist.name
  }`;

  const { data: userInfo } = useSelector(
    (state: RootState) => state.user.userProfile
  );

  const handleClickEdit = () => {
    router.push(`/content/edit/${id}`);
  };
  const handleContentBookmark = () => {
    setBookmarked(!bookmarked);
    dispatch(updateBookmarkThunk(id));
  };
  const handleClickDelete = (e: React.MouseEvent) => {
    modalController(e);
    flyoutController(e);
  };
  const handleDelete = () => {
    // TODO: 서버에 삭제 요청 보내기
    dispatch(deleteContentThunk(id));
    router.push('/');
  };

  useEffect(() => {
    if (window) localStorage.getItem('accessToken') && dispatch(getInfoThunk()); // 사용자 정보 요청
  }, []);

  return (
    <ContentPageStyle>
      <main>
        <ImageSection className="images">
          <Carousel col={1}>
            {images.map((url, idx) => (
              <div key={`image${idx}`}>
                <img src={url} />
              </div>
            ))}
          </Carousel>
        </ImageSection>
        <InfoSection className="info">
          <section className="head">
            <h1 className="main-title">{title}</h1>
            <div className="buttons">
              <div className="bookmark-button">
                <BookmarkButton
                  value={bookmarked ? true : false}
                  handler={handleContentBookmark}
                />
              </div>
              {userInfo && userInfo.id === author.id && (
                <div
                  className="author-action-trigger"
                  onClick={flyoutController}
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {isOpen && (
                    <Flyout isOpen={isOpen} handler={flyoutController}>
                      <ul>
                        <li className="flyout-option" onClick={handleClickEdit}>
                          수정하기
                        </li>
                        <li
                          className="flyout-option"
                          onClick={handleClickDelete}
                        >
                          삭제하기
                        </li>
                      </ul>
                    </Flyout>
                  )}
                </div>
              )}
            </div>
            <PopupNoTitle
              isOpen={popupIsOpen}
              modalController={modalController}
              isNoti={false}
              description={
                '정말 삭제하실건가요? 삭제한 컨텐츠는 다시 복구할 수 없어요.'
              }
              buttonText="삭제하기"
              buttonHandler={handleDelete}
            />
          </section>
          <div className="body">
            <section className="text-info">
              <InfoListItem icon={faHeart} title="아티스트">
                <span>{artistName}</span>
              </InfoListItem>
              <InfoListItem icon={faCalendar} title="이벤트 일정">
                <span>{start}</span>
                <span>{` ~ `}</span>
                <span>{end}</span>
              </InfoListItem>
              <InfoListItem icon={faClock} title="영업 시간">
                <span>{open}</span>
                <span>{` ~ `}</span>
                <span>{close}</span>
              </InfoListItem>
              <InfoListItem icon={faMapMarkerAlt} title="위치">
                <span className="road-address">
                  {roadAddress}
                  {` `}
                </span>
                <span className="store-name">{storeName}</span>
              </InfoListItem>
              <InfoListItem icon={faPhoneAlt} title="연락처">
                <span>{mobile}</span>
              </InfoListItem>
            </section>
            <section className="map-info">
              <LocationInfo
                storeName={storeName}
                lat={location.lat}
                lng={location.lng}
              />
              <Author className="author">
                <div>
                  <Avatar profileImage={profileImage} size={3} />
                  <div>
                    <span className="author-name">{name}</span>
                    <span className="author-desc">{`${artistName}의 Fan이에요 🤍`}</span>
                  </div>
                </div>
              </Author>
            </section>
          </div>
        </InfoSection>
        <SectionStyle className="description">
          <p>
            {description.split('\n').map((el) => (
              <>
                {el}
                <br />
              </>
            ))}
          </p>
        </SectionStyle>
        <SectionStyle className="tags">
          {tags.map((tag, idx) => (
            <Badge key={`tag${idx}`}>{tag}</Badge>
          ))}
        </SectionStyle>
        <SectionStyle className="perks">
          {Object.keys(perks).map((perk: string) => (
            <PerkBadge perk={perk} isActive={perks[perk]} key={perk} />
          ))}
        </SectionStyle>
      </main>
      <article className="comments">
        <div className="comments-title">
          <h3>Review</h3>
          <p>방문 후기를 공유해보세요</p>
        </div>
        <Comments />
      </article>
    </ContentPageStyle>
  );
};
export default ContentPageContainer;
