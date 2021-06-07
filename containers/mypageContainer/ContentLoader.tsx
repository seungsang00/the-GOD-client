import React from 'react';
import { useRouter } from 'next/router';
import { Carousel, MyPageContentCard, DataNullLink } from '@components';
import { ContentLoaderPropsType } from '@interfaces';

const ContentLoader = ({ data, type }: ContentLoaderPropsType) => {
  const router = useRouter();
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
  const moveToContentPage = (id: string) => {
    router.push(`/content/${id}`);
  };
  if (!data) {
    return <DataNullLink {...nullData[type]} />;
  }
  return (
    <>
      {data.length === 0 ? (
        <DataNullLink {...nullData[type]} />
      ) : (
        <Carousel>
          {data.map((content) => (
            <MyPageContentCard
              key={`content_${content.id}`}
              contentData={content}
              isOpen={true}
              handleClick={() => moveToContentPage(content.id)}
            />
          ))}
        </Carousel>
      )}
    </>
  );
};
export default ContentLoader;
