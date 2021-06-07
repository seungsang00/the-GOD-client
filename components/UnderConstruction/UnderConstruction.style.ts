import styled from '@styles/themed-components';

export const Wrapper = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
  p {
    font-size: 1rem;
    padding: ${({ theme }) => theme.space.xs} 0;
  }
  button {
    margin: ${({ theme }) => theme.space.md} 0;
  }
`;
