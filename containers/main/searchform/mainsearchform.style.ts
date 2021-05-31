import styled from '@styles/themed-components';

export const MainSearchFormContainer = styled.article`
  .main__searchform {
    justify-content: space-between;
    height: 5rem;
    background-color: lightblue;
    border-radius: 999px;
    padding: ${({ theme }) => theme.space.xs};
  }
  .trigger-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 ${({ theme }) => theme.space.md};
      border-radius: 999px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
      }
    }
    &.search-button {
      width: fit-content;
      cursor: pointer;
      color: #fff;
      & > div {
        background-color: ${({ theme }) => theme.colors.normal};
        &:hover {
          background-color: ${({ theme }) => theme.colors.hover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.action};
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
    background-color: ${({ theme }) => theme.colors.normal};
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.action};
    }
    z-index: 997;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet} {
    .inactive {
      display: none;
    }
  }
`;
