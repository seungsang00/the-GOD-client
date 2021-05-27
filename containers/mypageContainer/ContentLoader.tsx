import { Carousel, ContentCard, DataNullLink } from '@components';
import { ContentLoaderPropsType } from '@interfaces';
import React from 'react';

const ContentLoader = ({ data, type }: ContentLoaderPropsType) => {
  const nullData = {
    myContent: {
      description: '내 컨텐츠 작성하기',
      title: '내가 작성한 컨텐츠가 없습니다.',
      buttonText: '이벤트 글 쓰기',
      linkTo: '/',
    },
    bookmarks: {
      description: '내 컨텐츠 작성하기',
      title: '내가 작성한 컨텐츠가 없습니다.',
      buttonText: '이벤트 글 쓰기',
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
