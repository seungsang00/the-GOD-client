// TODO: null check

import { VerifyResult } from '@interfaces';

export const confirmPassword = (regExp: RegExp, password: string) => {
  // 유효성검사 통과 여부를 리턴
  if (!regExp) {
    return {
      isValid: false,
      errorMessage: '먼저 비밀번호를 입력해주세요',
    };
  } else {
    return regExp.test(password)
      ? {
          isValid: regExp.test(password),
          errorMessage: null,
        }
      : {
          isValid: regExp.test(password),
          errorMessage: '비밀번호가 일치하지 않습니다',
        };
  }
};

export const verifyPassword = (
  regExp: RegExp,
  password: string
): VerifyResult => {
  // 유효성검사 통과 여부를 리턴
  return regExp.test(password)
    ? {
        isValid: regExp.test(password),
        errorMessage: null,
      }
    : {
        isValid: regExp.test(password),
        errorMessage: '비밀번호는 6~10자 영문, 숫자 조합으로 작성해주세요',
      };
};

export const verifyEmail = (regExp: RegExp, email: string): VerifyResult => {
  // 유효성검사 통과 여부를 리턴
  return regExp.test(email)
    ? {
        isValid: regExp.test(email),
        errorMessage: null,
      }
    : {
        isValid: regExp.test(email),
        errorMessage: '이메일 형식에 맞게 작성해주세요',
      };
};

export const verifyUsername = (
  regExp: RegExp,
  username: string
): VerifyResult => {
  // 유효성검사 통과 여부를 리턴
  return regExp.test(username)
    ? {
        isValid: regExp.test(username),
        errorMessage: null,
      }
    : {
        isValid: regExp.test(username),
        errorMessage: '한글, 영문 대소문자를 이용해 2~15자로 작성해주세요',
      };
};
