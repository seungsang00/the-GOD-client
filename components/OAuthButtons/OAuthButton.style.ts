import styled from '@styles/themed-components';

export const ButtonOAuth = styled.button`
  ${({ theme }) => theme.concept.glassmorphism};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  color: #fafafa;
  border-radius: 999px;
  margin-bottom: ${({ theme }) => theme.space.sm};

  span {
    margin-left: ${({ theme }) => theme.space.xs};
    font-weight: 600;
  }
`;
