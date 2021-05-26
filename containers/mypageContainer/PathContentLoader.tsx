import { Carousel, DataNullLink } from '@components';
import { PathContentLoaderPropsType } from '@interfaces';
import PathContentCard from 'components/ContentCard/PathContentCard';
import React from 'react';

const PathContentLoader = ({ data }: PathContentLoaderPropsType) => {
  const nullData = {
    description: '내 컨텐츠 작성하기',
    title: '내가 만든 경로가 없습니다.',
    buttonText: '경로 만들기',
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
