import styled from '@styles/themed-components';

export const CommonLayoutStyle = styled.div`
  /* 공통 스타일 */
`;

export const MainContainer = styled.div`
  .holster {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column nowrap;
    font-family: monospace;
  }
  .container {
    display: flex;
    overflow: auto;
    flex: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .container.y {
    width: 100%;
    height: calc(100vh - 60px);
    flex-flow: column nowrap;
  }

  /* scroll-snap */
  .y.mandatory-scroll-snapping {
    scroll-snap-type: y mandatory;
  }

  .container > div {
    scroll-snap-align: center;
    flex: none;
  }
  .container > div.footer {
    scroll-snap-align: end;
  }
`;

export const MyPageStyle = styled.article`
  display: flex;
  padding: 0 ${({ theme }) => theme.space.md};

  section.settingCategory {
    width: 25%;
  }

  main {
    width: 75%;
    padding: 0 ${({ theme }) => theme.space.md};
  }

  #settingCategoryHandler {
    cursor: pointer;
  }

  #userInfoLeft {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} 0;
  }

  #userInfoTop {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} 0;

    & > .text {
      margin-left: ${({ theme }) => theme.space.sm};
    }

    ${({ theme }) => theme.media.mobile} {
      flex-direction: column;
    }
  }

  div.contents {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: ${({ theme }) => theme.space.sm};
    padding-bottom: ${({ theme }) => theme.space.lg};
  }
`;
