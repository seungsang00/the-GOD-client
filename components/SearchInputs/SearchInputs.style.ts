import styled from '@styles/themed-components';

export const SearchInputsSection = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  input {
    border: 1px solid blue;
  }

  ul.search-input-option {
    width: 100%;
  }
`;
