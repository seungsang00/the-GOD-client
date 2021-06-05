import { Content } from '@interfaces';
import React from 'react';
import MyRouteCard from './MyRouteCard';
import ContentCardStyle from './ContentCard.style';

const PathContentCard = ({ id, data }: { id: string; data: Content[] }) => {
  return (
    <ContentCardStyle id={id} className="route-wrapper">
      <div className="card">
        {data.map((el, i) => (
          <div key={i}>
            <MyRouteCard
              isOpen={false}
              contentData={el}
              handleClick={() => {}}
            />
          </div>
        ))}
      </div>
    </ContentCardStyle>
  );
};
export default PathContentCard;
