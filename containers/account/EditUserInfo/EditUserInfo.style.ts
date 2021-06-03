import styled from '@styles/themed-components';

export const EditUserInfoWrapper = styled.article`
  width: 100%;
  margin: ${({ theme }) => theme.space.xl} 0;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-area {
    padding: ${({ theme }) => theme.space.sm} 0;

    & > div {
      margin: ${({ theme }) => theme.space.sm} 0;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  input {
    height: 3rem;
    margin-top: ${({ theme }) => theme.space.sm};
    margin-bottom: ${({ theme }) => theme.space.md};
  }

  p.error {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.red.hover};
  }
`;
