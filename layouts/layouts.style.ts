import styled from '@styles/themed-components';

export const CommonLayoutStyle = styled.div`
  #mainContent {
    padding: ${({ theme }) => theme.space.lg} 0;
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
