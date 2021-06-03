import styled from '@styles/themed-components';

export const CommonLayoutStyle = styled.div`
  /* main page */
  .main__banner {
    height: 100vh;
    padding: 12vw;
    padding-top: 120px;
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
