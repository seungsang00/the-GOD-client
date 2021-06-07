import styled from '@styles/themed-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.concept.glassmorphism.deep};
  border-radius: ${({ theme }) => theme.borderRadius};

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: ${({ theme }) => theme.space.sm} 0;
  }
  p {
    color: ${({ theme }) => theme.colors.gray.gray01};
  }
  button {
    margin: ${({ theme }) => theme.space.md} 0;
  }
`;
