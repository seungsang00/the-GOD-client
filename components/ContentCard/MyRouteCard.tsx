import { Avatar, Badge, ImagesContainer } from '@components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentCardProps } from '@interfaces';
import { checkOpenNow } from '@utils/contentUtils';
import moment from 'moment';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import ContentCardStyle, { TimeBadge } from './ContentCard.style';

const MyRouteCard = ({
  isOpen,
  contentData,
  handleClick,
}: ContentCardProps): ReactElement => {
  const { id, artist, title, date, images, time, address } = contentData;
  return (
    <ContentCardStyle className="route-card" onClick={() => handleClick(id)}>
      <div className="default-view">
        <div className="content-info">
          <h4 className="route content-title">{`[${address.storeName}] ${title}`}</h4>
          <p className="content-dates route-card">
            {moment(date.start).format('YYYY.MM.DD')}
            {` ~ `}
            {moment(date.end).format('YYYY.MM.DD')}
          </p>
        </div>
        <div className="artist-avatar">
          <Avatar profileImage={artist.profileImage} size={2} />
        </div>
      </div>
      {isOpen && (
        <>
          <ImagesContainer title={title} images={images} max={3} />
          <div className="content-more-link">
            <Link href={`/content/${id}`}>
              <a>
                <span className="link-icon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="link-text">더보기</span>
              </a>
            </Link>
          </div>
        </>
      )}
    </ContentCardStyle>
  );
};
export default MyRouteCard;
