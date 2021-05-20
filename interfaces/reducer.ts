export interface user {
  username: string;
  email: string;
  profileImage: string;
}

export interface userReducer {
  token: string;
  error: string | Error | null;
  user: user;
}

export interface authReducer {
  id: string;
  error: string | Error | null;
}

// FIXME: 추후에 action함수쪽 타입으로 자리를 변경해야함

export interface signup {
  email: string;
  password: string;
  username: string;
}
