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
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: ${({ theme }) => theme.space.lg};
      margin-top: ${({ theme }) => theme.space.md};
    }
    #formButton {
      font-weight: 500;
      font-size: 1.2rem;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary.normal};
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      right: 0;
      bottom: 5px;
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
