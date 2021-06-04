import { Badge, ImagesContainer } from '@components';
import { ContentCardProps } from '@interfaces';
import { checkOpenNow } from '@utils/contentUtils';
import moment from 'moment';
import React, { ReactElement } from 'react';
import ContentCardStyle, { TimeBadge } from './ContentCard.style';

const ContentCard = ({
  isOpen,
  contentData,
  handleClick,
}: ContentCardProps): ReactElement => {
  const { id, artist, title, description, date, images, time, address } =
    contentData;
  const { group, name } = artist;
  return (
    <ContentCardStyle onClick={() => handleClick(id)}>
      <h4 className="content-title">{`[${
        group ? group + ' ' + name : name
      }] ${title}`}</h4>
      <p className="content-dates">
        {/* {`일정: `} */}
        {moment(date.start).format('YYYY-MM-DD')}
        {` ~ `}
        {moment(date.end).format('YYYY-MM-DD')}
        <span className="dates-badge">
          <Badge>{moment(date.end).fromNow() + ' 마감'}</Badge>
        </span>
      </p>
      <p className="content-store-info">
        <span className="store-name">{address.storeName}</span>
        <TimeBadge
          className="time-badge"
          isOpen={checkOpenNow(time.open, time.close)}
        >
          <Badge>
            {checkOpenNow(time.open, time.close) ? '영업중' : '준비중'}
          </Badge>
        </TimeBadge>
      </p>
      <p className="content-description">{description}</p>
      {isOpen && <ImagesContainer title={title} images={images} max={3} />}
    </ContentCardStyle>
  );
};
export default ContentCard;
