import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';
import ContentPageContainer from 'containers/content';
import { sampleContentData } from '../../utils/sample-data';

const ContentPage = () => {
  const router = useRouter();
  const { id } = router.query; // contentId

  // FIXME: store에서 컨텐츠 정보를 받아와야 합니다
  const {
    artist,
    title,
    tags,
    description,
    images,
    date,
    time,
    address,
    mobile,
    perks,
    isBookmark,
    author,
  } = sampleContentData;

  return (
    <Layout title={`${title} | FansSum::팬심이 모여 문화가 되다`}>
      <ContentPageContainer
        artist={artist}
        title={title}
        tags={tags}
        description={description}
        images={images}
        date={date}
        time={time}
        address={address}
        mobile={mobile}
        perks={perks}
        isBookmark={isBookmark}
        author={author}
      />
    </Layout>
  );
};

export default ContentPage;
