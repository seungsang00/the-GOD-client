import { IComment, Content, User, Artists } from '@interfaces';

export const sampleCommentsData: IComment[] = [
  {
    id: 'c019jkdkjbf1r088293902kjer',
    user: {
      id: '019jkdkjbf1r0882939',
      name: 'testUser',
      profileImage: 'https://bit.ly/3oqUbfM',
    },
    comment: `ᴛʜᴇ ᴠᴇʀʏ ʟᴏᴠᴇʟʏ ᴅᴀʏ, ᴍᴀʏ 𝟸𝟿ᴛʜ \n
    제이크의 20번째 생일을 맞이해서 \n
    카페이벤트와 미니전시회를 합니다!! \n
    후니네집에 많이 놀러오세요!! \n
    ɪɴ sᴇᴏᴜʟ & ɪɴ ʙᴀɴɢᴋᴏᴋ `,
    createdAt: '2021-05-13 16:24:02',
  },
  {
    id: 'c019jkqoeidf1r088293902kjer',
    user: {
      id: '019jkdkjbf1r0882940',
      name: 'sim',
      profileImage:
        'https://i.pinimg.com/280x280_RS/97/de/54/97de54c12e0bdfa5d334a83f6b682f63.jpg',
    },
    comment: 'very good',
    createdAt: '2021-05-17 16:18:02',
  },
  {
    id: 'c019jkdsldknflskfnreone293902kjer',
    user: {
      id: '019jkdkjbf1r0882990',
      name: 'reone',
      profileImage:
        'https://i.pinimg.com/736x/f1/2c/f2/f12cf2ff79a75193294dac1ee281e80f.jpg',
    },
    comment: 'super good',
    createdAt: '2021-05-21 17:24:02',
  },
  {
    id: 'c019jkskdfowiehfr088293902kjer',
    user: {
      id: '019jkdkjbf1r0982039',
      name: 'engene',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
    comment: 'amazing',
    createdAt: '2021-05-25 11:24:02',
  },
];

export const sampleUserProfile1: User = {
  id: '019jkdkjbf1r0882939',
  name: 'testUser',
  email: 'test1015@email.com',
  profileImage: 'https://bit.ly/3oqUbfM',
  passwordUpdate: '2021-05-26',
};

export const sampleUserProfile2: User = {
  id: '019jkdkjbf1r0982039',
  name: 'engene',
  email: 'engene1130@email.com',
  profileImage:
    'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
  passwordUpdate: '2021-05-20',
};

export const sampleContentListData: Content[] = [
  {
    id: '1',
    artist: { id: 'enhypen', name: 'ALL', group: 'ENHYPEN', profileImage: '' },
    title: '엔하이픈 컴백 기념 컵홀더 이벤트',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/EkSaUUAVgAE--Kc?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaVR3VoAAb4hd?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 37.0360005,
        lng: 126.8340014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '2',
    artist: { id: 'enhypen', name: 'ALL', group: 'ENHYPEN', profileImage: '' },
    title: '엔하이픈 음방 1위 기념 이벤트',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 음방 1위 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/Ez8I9XdVUAEnBFk?format=jpg&name=large',
      'https://pbs.twimg.com/media/Ez8I-GRVkAEIxhc?format=jpg&name=large',
      'https://pbs.twimg.com/media/Ez8I-y-VIAAHV0i?format=jpg&name=large',
      'https://pbs.twimg.com/media/Ez8I_dpVkAg32aE?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-07',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '오가다커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 37.5640455,
        lng: 128.8040014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '3',
    artist: {
      id: 'enhypen_sunoo',
      name: '선우',
      group: 'ENHYPEN',
      profileImage: '',
    },
    title: '엔하이픈 선우 생카',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/E2Te_zvUUAEvltv?format=jpg&name=large',
      'https://pbs.twimg.com/media/E2Te_ztUYAUuZ_Q?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 34.5640455,
        lng: 128.8390014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '4',
    artist: { id: 'enhypen', name: 'ALL', group: 'ENHYPEN', profileImage: '' },
    title: '엔하이픈 데뷔 기념 컵홀더 이벤트',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/En1PQxIVcAMdid_?format=jpg&name=large',
      'https://pbs.twimg.com/media/En1PQxHVkAAA-DR?format=jpg&name=large',
      'https://pbs.twimg.com/media/En1PQxJUwAIDX3N?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '카페 오가다(여의도 KBS 점)',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 34.5640455,
        lng: 126.8340014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '5',
    artist: {
      id: 'enhypen_sunoo',
      name: '선우',
      group: 'ENHYPEN',
      profileImage: '',
    },
    title: '엔하이픈 선우 생일 카페 이벤트',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/E2OSdi4VEAECLok?format=jpg&name=large',
      'https://pbs.twimg.com/media/E2OSdi7UUAEFNG8?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 36.3640455,
        lng: 126.9740014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '6',
    artist: {
      id: 'enhypen_jay',
      name: 'Jay',
      group: 'ENHYPEN',
      profileImage: '',
    },
    title: '엔하이픈 제이 생카',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/EkSaUUAVgAE--Kc?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaVR3VoAAb4hd?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 37.5640455,
        lng: 126.7120014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '7',
    artist: {
      id: 'enhypen_heeseung',
      name: '희승',
      group: 'ENHYPEN',
      profileImage: '',
    },
    title: '엔하이픈 희승 생카',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      '엔하이픈 컴백 기념 컵홀더 이벤트를 진행합니다. 서울에서 이벤트를 준비했습니다. 자세한 내용은 정보를 확인해주세요',
    images: [
      'https://pbs.twimg.com/media/EkSaUUAVgAE--Kc?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaVR3VoAAb4hd?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 37.2340455,
        lng: 126.1240014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
  {
    id: '8',
    artist: {
      id: 'enhypen_jake',
      name: 'Jake',
      group: 'ENHYPEN',
      profileImage: '',
    },
    title: '엔하이픈 제이크 생카',
    tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
    description:
      'ᴛʜᴇ ᴠᴇʀʏ ʟᴏᴠᴇʟʏ ᴅᴀʏ, ᴍᴀʏ 𝟸𝟿ᴛʜ  Heavy minus sign  지훈이의 23번째 생일을 맞이해서  카페이벤트와 미니전시회를 합니다!!  Potted plant후니네집에 많이 놀러오세요!!  Heavy minus sign  Balloonɪɴ sᴇᴏᴜʟ   &   Balloonɪɴ ʙᴀɴɢᴋᴏᴋ ',
    images: [
      'https://pbs.twimg.com/media/EkSaUUAVgAE--Kc?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaVR3VoAAb4hd?format=jpg&name=large',
      'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
    ],
    date: {
      start: '2021-05-25',
      end: '2021-06-01',
    },
    time: {
      open: '09:00:00',
      close: '22:00:00',
    },
    address: {
      storeName: '감탄커피',
      roadAddress: '서울 강남구 테헤란로 522 지하 1층',
      location: {
        lat: 36.6040455,
        lng: 128.1240014,
      },
    },
    mobile: '070-0000-0000',
    perks: {
      bus: true,
      subway: true,
      train: true,
      sort: false,
      baby: true,
      parking: false,
      cat: true,
    },
    isBookmark: true,
    author: {
      id: '019jkdkjbf1r0982039',
      name: 'ENGENE',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
  },
];

export const sampleContentData: Content = {
  id: '8',
  artist: {
    id: 'enhypen_jake',
    name: 'Jake',
    group: 'ENHYPEN',
    profileImage: '',
  },
  title: '엔하이픈 제이크 생카',
  tags: ['ENHYPEN', 'BORDER_CARNIVAL', 'Drunk-Dazed', 'FEVER'],
  description: `ᴛʜᴇ ᴠᴇʀʏ ʟᴏᴠᴇʟʏ ᴅᴀʏ, ᴍᴀʏ 𝟸𝟿ᴛʜ \n
    제이크의 20번째 생일을 맞이해서 \n
    카페이벤트와 미니전시회를 합니다!! \n
    후니네집에 많이 놀러오세요!! \n
    ɪɴ sᴇᴏᴜʟ & ɪɴ ʙᴀɴɢᴋᴏᴋ `,
  images: [
    'https://pbs.twimg.com/media/EkSaUUAVgAE--Kc?format=jpg&name=large',
    'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
    'https://pbs.twimg.com/media/EkSaVR3VoAAb4hd?format=jpg&name=large',
    'https://pbs.twimg.com/media/EkSaUzfU0AExb7l?format=jpg&name=large',
  ],
  date: {
    start: '2021-05-25',
    end: '2021-06-01',
  },
  time: {
    open: '09:00:00',
    close: '22:00:00',
  },
  address: {
    storeName: '감탄커피',
    roadAddress: '서울 강남구 테헤란로 522 지하 1층',
    location: {
      lat: 37.5079045982256,
      lng: 127.061346274941,
    },
  },
  mobile: '070-0000-0000',
  perks: {
    bus: true,
    subway: true,
    train: true,
    sort: false,
    baby: true,
    parking: false,
    cat: true,
  },
  isBookmark: true,
  author: {
    id: '019jkdkjbf1r0982039',
    name: 'ENGENE',
    profileImage:
      'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
  },
};

export const sampleArtists: Artists = [
  {
    id: 'enhypenid',
    type: 'group',
    name: 'enhypen',
    profileImage:
      'https://pbs.twimg.com/profile_images/1378875542636666882/q2sv0dVM_400x400.jpg',
    member: [
      {
        id: 'heeseungid',
        name: 'HEESEUNG',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F20210413014222892.jpg',
      },
      {
        id: 'jayid',
        name: 'JAY',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F20210413014021791.jpg',
      },
      {
        id: 'jakeid',
        name: 'JAKE',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F2021041301412376.jpg',
      },
      {
        id: 'sunghoonid',
        name: 'SUNGHOON',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F20210413013623101.jpg',
      },
      {
        id: 'sunooid',
        name: 'SUNOO',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F20210413013521446.jpg',
      },
      {
        id: 'jwid',
        name: 'JUNGWON',
        profileImage: 'https://bit.ly/3fNKbtm',
      },
      {
        id: 'nikiid',
        name: 'NIKI',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202104%2F20210413013407964.jpg',
      },
    ],
  },
  {
    id: 'btsid',
    type: 'group',
    name: 'BTS',
    profileImage:
      'https://pbs.twimg.com/profile_images/1387421813190238211/8YwygP3l_400x400.jpg',
    member: [
      {
        id: 'vid',
        name: 'V',
        profileImage: 'https://bit.ly/3fPwbPM',
      },
      {
        id: 'jkid',
        name: 'JUNGKOOK',
        profileImage: 'https://bit.ly/2RQobG9',
      },
      {
        id: 'rmid',
        name: 'RM',
        profileImage: 'https://bit.ly/3fKYuic',
      },
      {
        id: 'sugaid',
        name: 'SUGA',
        profileImage: 'https://bit.ly/2TqlN9y',
      },
      {
        id: 'jinid',
        name: 'JIN',
        profileImage: 'https://bit.ly/3bZC0J3',
      },
      {
        id: 'jhopeid',
        name: 'J-HOPE',
        profileImage: 'https://bit.ly/2SDF6eX',
      },
      {
        id: 'jiminid',
        name: 'JIMIN',
        profileImage: 'https://bit.ly/3i3SKTp',
      },
    ],
  },
  {
    id: 'blackpinkid',
    type: 'group',
    name: 'BLACKPINK',
    profileImage:
      'https://www.kbmaeil.com/news/photo/202006/848393_861634_5653.jpg',
    member: [
      {
        id: 'jisooid',
        name: 'JISOO',
        profileImage:
          'https://w.namu.la/s/e8ed9c579e26e5f360e3e0c082dae818f7aaee572b1cf906de6f0895ec5a80f1b84fd99ca81592bb415ba80110ccf97765169483de6a28cbd1861ed03686e4d08b129b6a16cd02dc3362be0932aca541182c401b10bc563f4f35cba68ac56b6e10ec8656ae473f95a7aea2bd57de7069',
      },
      {
        id: 'jennieid',
        name: 'JENNIE',
        profileImage: 'https://bit.ly/3fSS2G0',
      },
      {
        id: 'roseid',
        name: 'ROSE',
        profileImage: 'https://bit.ly/3ftK72R',
      },
      {
        id: 'lisaid',
        name: 'LISA',
        profileImage: 'https://bit.ly/3vv7qio',
      },
    ],
  },
  {
    id: 'bravegirlsid',
    type: 'group',
    name: 'Brave Girls',
    profileImage:
      'https://pbs.twimg.com/profile_images/1291267221633691648/uEtvkFf7_400x400.jpg',
    member: [
      {
        id: 'minyoungid',
        name: '민영',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202008%2F20200810211204239-7719581.jpg',
      },
      {
        id: 'ujeongid',
        name: '유정',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202008%2F20200810211103401-3092964.jpg',
      },
      {
        id: 'eunjiid',
        name: '은지',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202008%2F20200810211129195-6254359.jpg',
      },
      {
        id: 'unaid',
        name: '유나',
        profileImage:
          'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202008%2F20200810211030401-8026508.jpg',
      },
    ],
  },
  {
    id: 'iuid',
    type: 'solo',
    name: 'IU',
    profileImage:
      'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg',
  },
  {
    id: 'nhaid',
    type: 'solo',
    name: '나훈아',
    profileImage:
      'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F54%2F20061215114900197040482.jpg',
  },
  {
    id: 'zerotakid',
    type: 'solo',
    name: '영탁',
    profileImage:
      'https://images.chosun.com/resizer/7PCjuSWn5exLWlukRmZWqWawI38=/550x585/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/O4QQZSPLXA7HREMRTRU2WJCHUI.jpg',
  },
];

export const sampleSearchInputOptions: any = {
  artist: {
    ENHYPEN: ['ALL', '희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
    IU: null,
    나훈아: null,
    영탁: null,
    BTS: ['ALL', 'V', '지민', '제이홉', '슈가', 'RM', '정국', '진'],
  },
  location: {
    서울: [
      '전체',
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
    대전: ['전체', '유성구', '서구', '중구', '동구', '대덕구'],
    부산: ['전체'],
    대구: ['전체'],
    광주: ['전체'],
    제주: ['전체'],
    울산: ['전체'],
    인천: ['전체'],
  },
};
