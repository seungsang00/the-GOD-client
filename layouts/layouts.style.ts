import { customMediaQuery } from '@styles/theme';
import styled from '@styles/themed-components';

export const CommonLayoutStyle = styled.div`
  /* 공통 스타일 */
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.space.xl};

  section.settingCategory {
    width: 25%;
  }

  main {
    width: 70%;
    padding: 0 ${({ theme }) => theme.space.md};
    padding-left: 7vw;

    h2 {
      font-size: 1.45rem;
      font-family: 'GmarketSansB';
    }

    ${customMediaQuery(925)} {
      width: 100%;
      h2 {
        font-size: 1.3rem;
        font-family: 'GmarketSansB';
      }
    }
  }

  #settingCategoryHandler {
    cursor: pointer;
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    position: relative;
    left: -15px;
    color: ${({ theme }) => theme.colors.textColor};
    padding-right: 2px;

    &:hover {
      ${({ theme }) => theme.concept.glassmorphism.light};
    }
  }

  #userInfoLeft {
    min-width: 240px;
    width: 270px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} 0;
    ${({ theme }) => theme.concept.glassmorphism.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.primary.normal};
    background-image: linear-gradient(to bottom right, #aa5aff, #9b36fe);
    border: 2px solid ${({ theme }) => theme.colors.primary.hover};
    font-family: 'GmarketSansM';
    color: #fff;

    .profile-image {
      margin-bottom: ${({ theme }) => theme.space.sm};
    }

    h3 {
      line-height: 1.5rem;
      .username {
        font-family: 'GmarketSansB';
        font-size: 1.2rem;
      }
      &.hello {
        font-size: 1.1rem;
      }
    }

    .email {
      font-family: 'GmarketSansM';
      font-size: 0.9rem;
      margin-bottom: ${({ theme }) => theme.space.sm};
      color: ${({ theme }) => theme.colors.gray.gray03};
    }
  }

  #userInfoTop {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} 0;

    & > .text {
      margin-left: ${({ theme }) => theme.space.sm};
      .email {
        font-family: 'GmarketSansM';
        font-size: 0.97rem;
        margin-top: ${({ theme }) => theme.space.xxs};
        color: ${({ theme }) => theme.colors.gray.gray01};
      }
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
