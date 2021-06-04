import styled from '@styles/themed-components';

export const ContentListWrapper = styled.div`
  width: 410px;
  z-index: 99 !important;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 60px;
  height: 100%;
  ${({ theme }) => theme.concept.glassmorphism.light};
  padding: ${({ theme }) => theme.space.sm};

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    /*  스크롤의 화살표가 포함된 영역   */
    display: none;
  }
`;

export const SearchContentLoaderStyle = styled.section`
  height: 100%;
  & > div {
    &:first-child {
      max-height: calc(100vh - 60px);
      left: 0;
    }
    &:nth-child(2) {
      z-index: 9;
      top: 70px;
      right: 20px;
    }
    &:last-child {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
  .root-mode-trigger {
  }
`;
