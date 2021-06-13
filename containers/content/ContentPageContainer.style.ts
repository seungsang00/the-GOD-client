import styled from '@styles/themed-components';
import { customMediaQuery } from '@styles/theme';

export const ImageSection = styled.section`
  width: 100%;
  height: 400px;
  margin-bottom: ${({ theme }) => theme.space.lg};

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const InfoSection = styled.section`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.md};
  padding: 0 ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.concept.glassmorphism.light};

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-break: keep-all;
    position: relative;
    margin-top: ${({ theme }) => theme.space.sm};
    margin-bottom: ${({ theme }) => theme.space.md};
    padding: ${({ theme }) => theme.space.sm};

    .main-title {
      font-weight: 600;
    }

    .buttons {
      display: flex;
      align-items: center;
    }

    .author-action-trigger {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.gray.gray01};
      cursor: pointer;
      border-radius: 999px;
      padding: 0 ${({ theme }) => theme.space.sm};
      margin-left: ${({ theme }) => theme.space.sm};

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray04};
      }
    }

    ${({ theme }) => theme.media.tablet} {
      width: 100%;
      margin-top: ${({ theme }) => theme.space.sm};
    }

    ${({ theme }) => theme.media.mobile} {
      padding: ${({ theme }) => theme.space.sm} 0;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .text-info {
      width: 50%;
      min-width: 400px;
      padding-right: ${({ theme }) => theme.space.sm};
    }

    .map-info {
      width: 48%;
      height: fit-content;
    }

    ${customMediaQuery(940)} {
      justify-content: center;

      .text-info {
        width: 100%;
        min-width: 360px;
        margin-bottom: ${({ theme }) => theme.space.sm};
      }
      .map-info {
        width: 100%;
      }
    }
  }
`;

export const Author = styled.div`
  width: 100%;
  /* height: 48px; */
  ${({ theme }) => theme.concept.glassmorphism.deep}
  box-shadow: none;
  margin-top: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.xs};
  border-radius: 12px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      display: block;
      padding: ${({ theme }) => theme.space.xxs} 0;
      margin-left: ${({ theme }) => theme.space.sm};
    }
    .author-name {
      font-weight: 500;
    }
    .author-desc {
      font-size: 14px;
    }
    img {
      border-radius: 20px !important;
    }
  }
`;

export const SectionStyle = styled.section`
  display: flex;
  padding: 0 ${({ theme }) => theme.space.md};

  &.description {
    min-height: 5rem;
    font-size: 1.1rem;
    padding: ${({ theme }) => theme.space.md};
  }

  &.tags {
    flex-wrap: wrap;
    padding: ${({ theme }) => theme.space.sm};
  }

  &.perks {
    border-radius: ${({ theme }) => theme.borderRadius};
    /* background-color: ${({ theme }) => theme.colors.gray.gray04}; */
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    padding: ${({ theme }) => theme.space.sm};

    ${customMediaQuery(640)} {
      justify-content: flex-start;
    }
  }
`;

export const ContentPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;

  /* space */
  padding: ${({ theme }) => theme.space.xl};

  h1.main-title {
    font-size: 1.7rem;
    line-height: 2.4rem;
    margin-right: ${({ theme }) => theme.space.xl};

    ${({ theme }) => theme.media.mobile} {
      font-size: 1.2rem;
      line-height: 2.4rem;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    max-width: 95%;
    padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
    .main-title {
      font-size: 1.4rem !important;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.xs};

    & > main {
      width: 100%;
    }
    .main-title {
      font-size: 1.2rem !important;
    }
  }

  #authorOnly {
    display: flex;
    justify-content: flex-end;

    & > span {
      cursor: pointer;
      border-bottom: 1px solid black;
    }
  }

  /* comments */
  article.comments {
    width: 100%;
  }
  .comments-title {
    display: flex;
    align-items: flex-end;
    padding: ${({ theme }) => theme.space.sm};
    margin-bottom: ${({ theme }) => theme.space.sm};

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-right: ${({ theme }) => theme.space.sm};
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
