import styled from '@styles/themed-components';

export const FlyoutStyle = styled.div`
  &.flyout-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
  }

  .flyout-content {
    position: absolute;
    top: 2rem;
    left: -160px;
    width: 10vw;
    min-width: 180px;
    max-width: 360px;
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.xs};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    z-index: 999;

    .flyout-option {
      cursor: pointer;
      font-weight: 600;
      line-height: 1.7rem;
      padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};

      &:hover {
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.colors.lightgrey};
      }
    }
  }
`;
