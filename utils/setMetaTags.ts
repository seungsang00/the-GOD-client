type MetaData = {
  title: string;
  description: string;
  imageUrl: string;
};

const defaultData: MetaData = {
  title: 'FansSum | 팬심이 모여 문화가 되다',
  description: '아티스트 팬덤을 위한 컵홀더 이벤트 검색 플랫폼',
  imageUrl: '/images/logo-pin-icon.svg',
};

export const setMetaTags = ({
  title = defaultData.title,
  description = defaultData.description,
  imageUrl = defaultData.imageUrl,
}: MetaData) => {
  const metaTitle: Element | null = document.querySelector(
    'meta[property="og:title"]'
  );
  const metaDescription: Element | null = document.querySelector(
    'meta[property="og:description"]'
  );
  const metaImage: Element | null = document.querySelector(
    'meta[property="og:image"]'
  );
  const metaUrl: Element | null = document.querySelector(
    'meta[property="og:url"]'
  );

  // set meta datas
  metaTitle?.setAttribute('content', title);
  metaDescription?.setAttribute('content', description);
  metaImage?.setAttribute('content', imageUrl);
  metaUrl?.setAttribute('content', window.location.href);
};
