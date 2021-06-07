import { Content } from '@interfaces';
import React from 'react';
import MyRouteCard from './MyRouteCard';
import ContentCardStyle from './ContentCard.style';

const PathContentCard = ({
  id,
  data,
  handler,
}: {
  id: string;
  data: Content[];
  handler: (id: string) => void;
}) => {
  return (
    <ContentCardStyle
      id={id}
      className="route-wrapper"
      onClick={() => handler(id)}
    >
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
