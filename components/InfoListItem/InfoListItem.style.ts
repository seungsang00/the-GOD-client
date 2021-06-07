import styled from '@styles/themed-components';

export const InfoListItemStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  word-break: keep-all;

  .info-icon {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ theme }) => theme.space.sm};
    ${({ theme }) => theme.concept.glassmorphism.deep};
    border-radius: 20px;
  }

  .info-text {
    line-height: 1.1rem;
    word-break: keep-all;
    .title {
      font-weight: 600;
      margin-bottom: ${({ theme }) => theme.space.xxs};
    }
    .sub {
      font-size: 0.8rem;
    }
  }

  .follow-button {
    margin-left: 10rem;
    word-break: keep-all;
  }
`;
