import styled from '@styles/themed-components';
export const InputArea = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    text-align: center;
    border: 1px solid red;
  }
  .input-first-depth {
  }
`;
export const OptionArea = styled.div`
  display: flex;
  height: 300px;

  ul {
    min-width: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

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
