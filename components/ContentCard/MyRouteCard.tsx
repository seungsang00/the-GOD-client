import { Avatar } from '@components';
import { ContentCardProps } from '@interfaces';
import moment from 'moment';
import React, { ReactElement } from 'react';
import ContentCardStyle from './ContentCard.style';

const MyRouteCard = ({
  contentData,
  handleClick,
}: ContentCardProps): ReactElement => {
  const { id, artist, title, date, address } = contentData;
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
    </ContentCardStyle>
  );
};
export default MyRouteCard;
