import { customMediaQuery } from '@styles/theme';
import styled from '@styles/themed-components';

export const AccountStyle = styled.div`
  h1 {
    font-size: 2rem;
    padding: ${({ theme }) => theme.space.sm} 0;
    font-weight: 600;
  }

  .content {
    max-width: 840px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.concept.glassmorphism.normal};
    border-radius: ${({ theme }) => theme.borderRadius};
    border-radius: 27px;
    padding: ${({ theme }) => theme.space.xl};
    margin-top: ${({ theme }) => theme.space.xl};

    .avatar-edit {
      position: relative;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: ${({ theme }) => theme.space.lg};
      margin-top: ${({ theme }) => theme.space.md};

      ${customMediaQuery(1105)} {
        justify-content: center;
      }
    }

    .avatar-edit-buttons {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;

      button {
        min-width: 210px;
        margin-bottom: ${({ theme }) => theme.space.xs};
      }
      & > form {
        width: fit-content;
        label {
          background: none;
          box-shadow: none;
          border: none;
          padding: 0;
        }
        ${customMediaQuery(1105)} {
          width: 100%;
        }
      }

      ${customMediaQuery(1105)} {
        margin-top: ${({ theme }) => theme.space.md};
      }
    }

    #formButton {
      font-weight: 500;
      font-size: 1.2rem;
      height: 2.4rem;
      min-width: 150px;
      border-radius: 999px;
      background-color: ${({ theme }) => theme.colors.primary.normal};
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      padding: 0 ${({ theme }) => theme.space.sm};
      margin-bottom: ${({ theme }) => theme.space.xs};
      margin-right: ${({ theme }) => theme.space.sm};
      span {
        font-size: 1rem;
        font-weight: 600;
        margin-left: ${({ theme }) => theme.space.sm};
      }
      ${customMediaQuery(1105)} {
        margin-right: 0;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.hover};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.primary.pressed};
      }
    }
    .username-edit-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .username-edit {
      position: relative;
      input {
        height: 3rem;
      }
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  #accountDelete {
    margin-top: ${({ theme }) => theme.space.md};
    padding-top: ${({ theme }) => theme.space.xxl};
    border-top: 1px solid ${({ theme }) => theme.colors.line.line01};
  }

  .account-delete {
    margin: ${({ theme }) => theme.space.lg} 0;
  }
  .account-delete-title {
    margin: ${({ theme }) => theme.space.sm} 0;
  }
  .account-delete-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section {
    width: 100%;
  }
`;
