export const verifyPassword = (password: string): VerifyResult => {
  // 6~10자 영문, 숫자 조합
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;
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

export const verifyEmail = (email: string): VerifyResult => {
  // 이메일 유효성검사
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
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

export const verifyUsername = (username: string): VerifyResult => {
  // 2~15자 한글, 영문 대소문자 사용가능
  const regExp = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
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

export type VerifyResult = {
  isValid: boolean;
  errorMessage: string | null;
};

export type VerifyFunction = (value: string) => VerifyResult;
