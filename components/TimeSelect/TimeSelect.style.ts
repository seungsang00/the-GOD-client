import styled from '@styles/themed-components';

export const TimeSelectBox = styled.div<{
  hour: string;
  minute: string;
  isOptionOpenH: boolean;
  isOptionOpenM: boolean;
}>`
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};

  article {
    position: relative;
    width: 45%;
    min-height: 2rem;
    text-align-last: center;
    text-align: center;
    -ms-text-align-last: center;
    -moz-text-align-last: center;

    div {
      line-height: 2rem;
    }
  }

  ul.option-container {
    width: 100%;
    max-height: 500px;
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 9999;
    overflow-y: scroll;
  }

  li {
    height: 2rem;
  }
`;
