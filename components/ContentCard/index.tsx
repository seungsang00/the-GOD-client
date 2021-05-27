import { ImagesContainer } from '@components';
import { Content } from '@interfaces';
import React from 'react';
import ContentCardStyle from './ContentCard.style';

interface ContentCardProps {
  isOpen: boolean; // 현재 디테일 영역이 열려있는 컨텐츠id
  contentData: Content;
}
const ContentCard = ({ isOpen, contentData }: ContentCardProps) => {
  const { title, description, date, images } = contentData;
  return (
    <ContentCardStyle>
      <div>{title}</div>
      <div>{description}</div>
      <div>{date}</div>
      {isOpen && <ImagesContainer title={title} images={images} max={3} />}
    </ContentCardStyle>
  );
};
export default ContentCard;
