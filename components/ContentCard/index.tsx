import { Badge, ImagesContainer } from '@components';
import { ContentCardProps } from '@interfaces';
import { checkOpenNow } from '@utils/contentUtils';
import moment from 'moment';
import React, { ReactElement } from 'react';
import ContentCardStyle from './ContentCard.style';

const ContentCard = ({
  isOpen,
  contentData,
  handleClick,
}: ContentCardProps): ReactElement => {
  const { id, title, description, date, images, time } = contentData;
  return (
    <ContentCardStyle onClick={() => handleClick(id)}>
      <h4>{title}</h4>
      <span>
        <Badge>{moment(date.end).fromNow() + ' 마감'}</Badge>
      </span>
      <span>
        <Badge>
          {checkOpenNow(time.open, time.close) ? '영업중' : '준비중'}
        </Badge>
      </span>
      <div>{description}</div>
      {isOpen && <ImagesContainer title={title} images={images} max={3} />}
    </ContentCardStyle>
  );
};
export default ContentCard;
