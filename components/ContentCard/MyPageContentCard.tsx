import { Avatar, Badge, ImagesContainer } from '@components';
import { ContentCardProps } from '@interfaces';
import { checkOpenNow } from '@utils/contentUtils';
import moment from 'moment';
import React, { ReactElement } from 'react';
import { TimeBadge } from './ContentCard.style';
import ContentCardStyle from './MyPageContentCard.style';

const MyPageContentCard = ({
  isOpen,
  contentData,
  handleClick,
}: ContentCardProps): ReactElement => {
  const { id, artist, title, date, images, time, address } = contentData;
  // const { group, name } = artist;
  return (
    <ContentCardStyle onClick={() => handleClick(id)}>
      <section className="default-view">
        <div>
          <h4 className="content-title">{`[${address.storeName}] ${title}`}</h4>
          <p className="content-dates">
            {moment(date.start).format('YYYY.MM.DD')}
            {` ~ `}
            {moment(date.end).format('YYYY.MM.DD')}
          </p>
          <p className="content-store-info">
            <span className="store-name">{address.storeName}</span>
            <TimeBadge isOpen={checkOpenNow(time.open, time.close)}>
              <Badge>
                {checkOpenNow(time.open, time.close) ? '영업중' : '준비중'}
              </Badge>
            </TimeBadge>
          </p>
        </div>
        <div className="artist-avatar">
          <Avatar profileImage={artist.profileImage} size={3} />
        </div>
      </section>
      {isOpen && (
        <>
          <ImagesContainer title={title} images={images} max={3} />
        </>
      )}
    </ContentCardStyle>
  );
};
export default MyPageContentCard;
