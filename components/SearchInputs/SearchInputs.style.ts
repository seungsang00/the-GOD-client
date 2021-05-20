import styled from '@styles/themed-components';

export const SearchInputsSection = styled.section`
  display: flex;
  flex-direction: column;

  ul.search-input-option {
    width: 100%;
  }
`;

export const FullSearchInputContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;

  input {
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
  max-height: 50%;
  background-color: lightblue;

  ul {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 64px;
      padding: ${({ theme }) => theme.space.xs} 0;
      padding-left: ${({ theme }) => theme.space.md};
      border: 1px solid blue;
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
    width: 100%;
    border: 1px solid blue;
    font-size: 1.1rem;
    padding: ${({ theme }) => theme.space.xs} 0;
    padding-left: ${({ theme }) => theme.space.md};
  }
`;

export const MobileSearchOptionContainer = styled.div`
  width: 100%;
  background-color: lightblue;

  ul {
    width: 100%;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 64px;
      padding: ${({ theme }) => theme.space.xs} 0;
      padding-left: ${({ theme }) => theme.space.md};
      border: 1px solid blue;
    }
  }
`;
