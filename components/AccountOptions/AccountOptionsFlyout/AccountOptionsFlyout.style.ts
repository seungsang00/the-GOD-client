import styled from '@styles/themed-components';

export const FlyoutContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  .flyout-content {
    position: absolute;
    top: 60px;
    right: 24px;
    width: 10vw;
    min-width: 180px;
    max-width: 360px;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.xs};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.concept.glassmorphism.deep};

    .account-option {
      cursor: pointer;
      font-weight: 600;
      line-height: 1.7rem;
      padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};

      &:hover {
        color: #fff;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.colors.primary.normal};
      }
    }
  }
`;
