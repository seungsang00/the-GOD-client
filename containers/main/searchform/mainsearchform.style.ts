import styled from '@styles/themed-components';

export const MainSearchFormContainer = styled.article`
  .main__searchform {
    justify-content: space-between;
    height: 5rem;
    border-radius: 999px;
    padding: ${({ theme }) => theme.space.xs};
    ${({ theme }) => theme.concept.glassmorphism005};
  }
  .trigger-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:first-child {
      min-width: 165px;
    }
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 ${({ theme }) => theme.space.md};
      border-radius: 999px;
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        ${({ theme }) => theme.concept.glassmorphism005};
      }
    }
    &.search-button {
      width: fit-content;
      cursor: pointer;
      margin-left: ${({ theme }) => theme.space.xxs};
      & > div {
        border: 1px solid rgba(255, 255, 255, 0.05);
        background: rgba(255, 255, 255, 0.05);
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
        &:active {
          background: rgba(255, 255, 255, 0.01);
        }
      }
    }
  }
  .search-button__bottom--container {
    position: fixed;
    right: 0;
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${({ theme }) => theme.space.md};
  }
  .search-button__bottom {
    width: 100%;
    height: 3.5rem;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.button.default.normal};
    &:hover {
      background-color: ${({ theme }) => theme.colors.button.default.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.default.pressed};
    }
    z-index: ${({ theme }) => theme.zIndex.depth04};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 1.1rem;
      margin-left: ${({ theme }) => theme.space.xs};
    }
    svg {
      margin-top: 1.2px;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    .inactive {
      display: none;
    }
  }
`;
