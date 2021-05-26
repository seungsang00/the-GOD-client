import { Content } from '@interfaces';
import React from 'react';
import ContentCard from '.';
import ContentCardStyle from './ContentCard.style';

const PathContentCard = ({ id, data }: { id: string; data: Content[] }) => {
  return (
    <ContentCardStyle id={id}>
      <div>
        {data.map((el, i) => {
          <div key={i}>
            <ContentCard {...el} />
          </div>;
        })}
      </div>
    </ContentCardStyle>
  );
};
export default PathContentCard;
