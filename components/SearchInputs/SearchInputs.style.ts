import styled from '@styles/themed-components';

export const OptionArea = styled.div`
  display: flex;
  height: 300px;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 50%;

    & > li {
      min-width: 50%;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightblue;
    }
  }
`;
