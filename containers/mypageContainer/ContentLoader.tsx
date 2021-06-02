import { Carousel, ContentCard, DataNullLink } from '@components';
import { ContentLoaderPropsType } from '@interfaces';
import React from 'react';

const ContentLoader = ({ data, type }: ContentLoaderPropsType) => {
  const nullData = {
    myContent: {
      title: '내가 등록한 이벤트는 여기에서 확인할 수 있어요',
      description: '최애의 이벤트를 등록하고 모두와 공유해보아요!',
      buttonText: '이벤트 글 쓰기',
      linkTo: '/content/form',
    },
    bookmarks: {
      title: '내가 북마크 한 이벤트는 여기에서 확인할 수 있어요',
      description: '북마크한 컨텐츠가 없어요',
      buttonText: '최애 이벤트 찾으러 가기',
      linkTo: '/',
    },
  };
  if (!data) {
    return <DataNullLink {...nullData[type]} />;
  }
  return (
    <Carousel>
      {data.map((content) => (
        <ContentCard
          key={`content_${content.id}`}
          contentData={content}
          isOpen={true}
        />
      ))}
    </Carousel>
  );
};
export default ContentLoader;
