import styled from '@styles/themed-components';

export const ImageSection = styled.section`
  width: 55%;
  height: 400px;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const InfoSection = styled.section`
  width: 40%;
  margin-left: ${({ theme }) => theme.space.md};
  padding: 0 ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-top: ${({ theme }) => theme.space.sm};
  }

  .head {
    display: flex;
    align-items: center;
    word-break: keep-all;
    position: relative;
    width: fit-content;
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`;

export const Author = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.space.xs};
  span {
    margin-left: ${({ theme }) => theme.space.sm};
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
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({ theme }) => theme.space.sm};
  }
`;

export const ContentPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .top {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }

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
    padding: ${({ theme }) => theme.space.md};
    .main-title {
      font-size: 1.4rem !important;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.space.sm};
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
`;
