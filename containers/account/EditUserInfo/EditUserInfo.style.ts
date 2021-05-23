import styled from '@styles/themed-components';

export const EditUserInfoWrapper = styled.article`
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-area {
    padding: ${({ theme }) => theme.space.sm} 0;
  }

  input {
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.grey};
    margin-top: ${({ theme }) => theme.space.sm};
    margin-bottom: ${({ theme }) => theme.space.md};
  }

  p.error {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.normal};
  }
`;
