import { customMediaQuery } from '@styles/theme';
import styled from '@styles/themed-components';

export const AuthModalStyle = styled.div`
  .modal-overlay {
    width: 100vw;
    height: 100vh;
    box-sizing: content-box;
  }
  .modal-box {
    width: 450px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.space.md};

    .modal-content-box {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LoginContainer = styled.article``;

export const FormSection = styled.section`
  input {
    background-color: ${({ theme }) => theme.colors.bg.normal};
    border-color: ${({ theme }) => theme.colors.bg.hover};
    height: 40px;
    border-radius: 999px;
  }

  & > button {
    width: 100%;
    margin-top: ${({ theme }) => theme.space.md};
  }

  p.error {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.red.hover};
    margin-bottom: ${({ theme }) => theme.space.xs};
    padding: 0 ${({ theme }) => theme.space.xs};
    word-break: keep-all;
  }
`;

export const OAuthSection = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.second-row > button:first-child {
      margin-right: ${({ theme }) => theme.space.xxs};
    }

    ${customMediaQuery(518)} {
      flex-direction: column;
      &.second-row > button:first-child {
        margin-right: 0;
      }
    }
  }
`;

export const LinkSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.sm};

  .auth-desc {
    color: ${({ theme }) => theme.colors.gray.gray01};
  }

  .auth-link {
    cursor: pointer;
    font-weight: 500;
    margin-left: ${({ theme }) => theme.space.xxs};
    &:hover {
      color: ${({ theme }) => theme.colors.primary.hover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.pressed};
    }
  }

  ${customMediaQuery(518)} {
    flex-direction: column;
    .auth-link {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.space.xs};
    }
  }
`;
