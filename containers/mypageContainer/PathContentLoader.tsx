import { Carousel, DataNullLink } from '@components';
import { PathContentLoaderPropsType } from '@interfaces';
import PathContentCard from 'components/ContentCard/PathContentCard';
import React from 'react';

const PathContentLoader = ({ data }: PathContentLoaderPropsType) => {
  const nullData = {
    description:
      '저장된 마이 루트가 없습니다. 이벤트를 검색해 마이루트를 생성해보세요!',
    title: '내가 만든 팬썸 루트는 여기에서 확인할 수 있어요',
    buttonText: '나만의 팬썸 루트 만들기',
    linkTo: '/',
  };
  if (!data) {
    return <DataNullLink {...nullData} />;
  }
  return (
    <Carousel>
      {data.map(({ id, content }) => (
        <PathContentCard id={id} data={content} />
      ))}
    </Carousel>
  );
};
export default PathContentLoader;
