import styled from '@styles/themed-components';

export const SearchInputsSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: ${({ theme }) => theme.space.lg} 0;
  ${({ theme }) => theme.media.tablet} {
    margin: ${({ theme }) => theme.space.md} 0;
  }
  ${({ theme }) => theme.media.mobile} {
    margin: ${({ theme }) => theme.space.sm} 0;
  }
`;

export const FullSearchInputContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;

  input {
    cursor: pointer;
    width: 30%;
    border: 1px solid blue;
    font-size: 1.1rem;
    padding: ${({ theme }) => theme.space.xs} 0;
    padding-left: ${({ theme }) => theme.space.md};
    padding-right: ${({ theme }) => theme.space.md};
    text-overflow: ellipsis;

    ${({ theme }) => theme.media.tablet} {
      font-size: 0.9rem;
    }
    ${({ theme }) => theme.media.mobile} {
      font-size: 0.7rem;
    }
  }
`;

export const FullSearchOptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    width: 90% !important;
    max-height: 30vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: ${({ theme }) => theme.space.sm} 0;

    li {
      height: 3rem;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: ${({ theme }) => theme.space.xs} 0;
      padding-left: ${({ theme }) => theme.space.md};
      border: 1px solid blue;

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;

export const MobileSearchInputContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  background-color: pink;

  input {
    width: 90%;
    border: 1px solid blue;
    font-size: 1.1rem;
    padding: ${({ theme }) => theme.space.xs} 0;
    padding-left: ${({ theme }) => theme.space.md};
  }
`;

export const MobileSearchOptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: lightblue;

  ul {
    width: 90%;
    max-height: 50vh;
    overflow-y: scroll;

    li {
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: ${({ theme }) => theme.space.xs} 0;
      padding-left: ${({ theme }) => theme.space.md};
      border: 1px solid blue;
      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;
