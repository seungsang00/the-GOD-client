import styled from '@styles/themed-components';

export const TimeSelectContainer = styled.div`
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  select {
    width: 45%;
    min-height: 2rem;
    background: none;
    outline: none;
    border: none;
    text-align-last: center;
    text-align: center;
    -ms-text-align-last: center;
    -moz-text-align-last: center;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
  }
`;

export const TimeSelectBox = styled.div`
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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
