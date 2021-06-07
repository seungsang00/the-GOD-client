// 6~10자 영문, 숫자 조합
export const passwordStandard = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;

// 이메일 유효성검사
export const emailStandard =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 2~15자 한글, 영문 대소문자, 언더바 사용가능
export const usernameStandard = /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{2,15}$/;
