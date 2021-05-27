import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { InfoListItemStyle } from './InfoListItem.style';

interface InfoListItemProps {
  icon: IconProp;
  title: string;
  children: ReactNode;
}

const InfoListItem = ({ icon, title, children }: InfoListItemProps) => {
  return (
    <InfoListItemStyle>
      <div className="info-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div>{children}</div>
      </div>
    </InfoListItemStyle>
  );
};

export default InfoListItem;
