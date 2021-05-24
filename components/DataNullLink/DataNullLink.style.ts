import styled from '@styles/themed-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayScale500};

  button {
    margin: ${({ theme }) => theme.space.md} 0;
  }
`;
