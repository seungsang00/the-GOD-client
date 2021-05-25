import styled from '@styles/themed-components';

export const AccountStyle = styled.div`
  h1 {
    font-size: 2rem;
    padding: ${({ theme }) => theme.space.sm} 0;
  }
  h2 {
    font-size: 1.3rem;
    padding: ${({ theme }) => theme.space.xs} 0;
  }

  section {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }

  & > section > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
