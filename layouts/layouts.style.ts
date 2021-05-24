import styled from '@styles/themed-components';

export const CommonLayoutStyle = styled.div`
  #mainContent {
    padding: ${({ theme }) => theme.space.lg} 0;
  }

  /* main page */
  #mainBanner {
    height: 60vh;
    padding: ${({ theme }) => theme.space.xxl} 0;

    ${({ theme }) => theme.media.tablet} {
      padding: ${({ theme }) => theme.space.xl} 0;
    }
    ${({ theme }) => theme.media.mobile} {
      padding: ${({ theme }) => theme.space.lg} 0;
    }
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
  #userInfoTop {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} 0;

    & > .text {
      margin-left: ${({ theme }) => theme.space.sm};
    }
  }
`;
