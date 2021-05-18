import { User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleSearchInputOptions = {
  artists: {
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
