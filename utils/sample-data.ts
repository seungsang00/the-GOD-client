/* TODO: refactor
/ 1. page-layout
/ 2. reducer (factory)
*/

import { IComment, Content } from '@interfaces';

export const sampleCommentsData: IComment[] = [
  {
    id: 'c019jkdkjbf1r088293902kjer',
    author: {
      userId: '019jkdkjbf1r0882939',
      username: 'testUser',
      profileImage: 'https://bit.ly/3oqUbfM',
    },
    comments: 'good',
    createdAt: '2021-05-13 16:24:02',
  },
  {
    id: 'c019jkqoeidf1r088293902kjer',
    author: {
      userId: '019jkdkjbf1r0882940',
      username: 'sim',
      profileImage:
        'https://i.pinimg.com/280x280_RS/97/de/54/97de54c12e0bdfa5d334a83f6b682f63.jpg',
    },
    comments: 'very good',
    createdAt: '2021-05-17 16:18:02',
  },
  {
    id: 'c019jkdsldknflskfnreone293902kjer',
    author: {
      userId: '019jkdkjbf1r0882990',
      username: 'reone',
      profileImage:
        'https://i.pinimg.com/736x/f1/2c/f2/f12cf2ff79a75193294dac1ee281e80f.jpg',
    },
    comments: 'super good',
    createdAt: '2021-05-21 17:24:02',
  },
  {
    id: 'c019jkskdfowiehfr088293902kjer',
    author: {
      userId: '019jkdkjbf1r0982039',
      username: 'engene',
      profileImage:
        'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
    comments: 'amazing',
    createdAt: '2021-05-25 11:24:02',
  },
];

export const sampleUserProfile1 = {
  userId: '019jkdkjbf1r0882939',
  username: 'testUser',
  email: 'test1015@email.com',
  profileImage: 'https://bit.ly/3oqUbfM',
};

export const sampleUserProfile2 = {
  userId: '019jkdkjbf1r0982039',
  username: 'engene',
  email: 'engene1130@email.com',
  profileImage:
    'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
};

export const sampleContentData: Content = {
  artist: 'ENHYPEN',
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
      lat: 37.5640455,
      lng: 126.8340014,
    },
  },
  mobile: '070-0000-0000',
  perks: {
    bus: true,
    subway: true,
    train: true,
    elevator: false,
    baby: true,
    parking: false,
    pet: true,
  },
  isBookmark: true,
  author: {
    userId: '019jkdkjbf1r0982039',
    username: 'ENGENE',
    profileImage:
      'https://ih1.redbubble.net/image.2116095556.4251/st,small,507x507-pad,600x600,f8f8f8.jpg',
  },
};

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
