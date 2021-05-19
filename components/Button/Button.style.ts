import styled from 'styled-components';

export default styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid black;
  min-width: 240px;
  font-size: 18px;
  height: 30px;
  ${({ theme }) => theme.media.desktop} {
    min-width: 200px;
    font-size: 18px;
  }
  ${({ theme }) => theme.media.tablet} {
    min-width: 160px;
    font-size: 14px;
  }
  ${({ theme }) => theme.media.mobile} {
    min-width: 100px;
    font-size: 12px;
  }
  &:hover {
    background-color: rgba(233, 233, 233, 0.4);
  }
  &:active {
    background-color: rgba(233, 233, 233, 1);
  }
`;
