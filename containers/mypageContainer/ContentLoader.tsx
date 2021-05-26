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
      {data.map(({ id, title, description, date, images, ...rest }) => (
        <ContentCard
          key={`artist_${id}`}
          id={id}
          title={title}
          description={description}
          date={date}
          images={images}
          {...rest}
        />
      ))}
    </Carousel>
  );
};
export default ContentLoader;
