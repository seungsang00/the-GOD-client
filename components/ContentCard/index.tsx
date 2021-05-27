import { Content } from '@interfaces';
import React from 'react';
import ContentCardStyle from './ContentCard.style';

const ContentCard = ({ title, description, date, images }: Content) => {
  return (
    <ContentCardStyle>
      <div>{title}</div>
      <div>{description}</div>
      <div>{date}</div>
      <div>
        {images.map((el, i) => {
          <div key={i}>
            <img src={el} alt={`${title}-img-${i}`} />
          </div>;
        })}
      </div>
    </ContentCardStyle>
  );
};
export default ContentCard;
