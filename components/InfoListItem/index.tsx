import { LikeButton } from '@components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateFollowThunk } from 'modules/user';
import { RootState } from 'modules/reducer';
import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoListItemStyle } from './InfoListItem.style';

interface InfoListItemProps {
  icon: IconProp;
  title: string;
  children: ReactNode;
  isArtist: boolean;
  artist?: any;
}

const InfoListItem = ({
  icon,
  title,
  children,
  isArtist,
  artist,
}: InfoListItemProps) => {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState<boolean>(false);
  const { data } = useSelector((state: RootState) => state.user.follow);
  const handleArtistFollow = () => {
    dispatch(updateFollowThunk(artist.id));
  };
  useEffect(() => {
    if (artist) {
      setFollow(artist.isFollow);
    }
  }, []);
  useEffect(() => {
    if (data) {
      setFollow(data.isFollow);
    }
  }, [data]);
  return (
    <InfoListItemStyle>
      <div className="info-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div>{children}</div>
      </div>
      {isArtist && (
        <div className="follow-button">
          <LikeButton isActive={follow} handler={handleArtistFollow} />
        </div>
      )}
    </InfoListItemStyle>
  );
};

export default InfoListItem;
