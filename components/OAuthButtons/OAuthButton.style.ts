import styled from '@styles/themed-components';

export const ButtonOAuth = styled.button`
  ${({ theme }) => theme.concept.glassmorphism.deep};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  /* color: #fafafa; */
  border-radius: 999px;
  margin-bottom: ${({ theme }) => theme.space.xs};
  padding: 0 ${({ theme }) => theme.space.md};

  span {
    margin-left: ${({ theme }) => theme.space.xs};
    font-weight: 600;
  }
`;
