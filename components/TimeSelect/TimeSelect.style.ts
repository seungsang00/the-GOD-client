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
