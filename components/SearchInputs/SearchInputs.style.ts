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
export const DatePickerWrapper = styled.section`
  display: flex;
`;

export const SearchInputSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: fit-content;
  box-sizing: content-box;
  padding: ${({ theme }) => theme.space.xs};
  border: 1px solid red;
  border-radius: 999px;

  .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 999px;
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
    cursor: pointer;
  }
  .row {
    flex-direction: row;
    padding: 0;
  }
  input {
    margin-top: ${({ theme }) => theme.space.xs};
    padding: 0;
    cursor: pointer;
  }
  button {
    width: 7rem;
    height: 100%;
    border-radius: 999px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.normal};
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.action};
    }
  }

  .field {
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
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
