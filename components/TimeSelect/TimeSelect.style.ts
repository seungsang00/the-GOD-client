import styled from '@styles/themed-components';

export const TimeSelectBox = styled.div<{
  hour: string;
  minute: string;
  isOptionOpenH: boolean;
  isOptionOpenM: boolean;
}>`
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.line.line03};

  article {
    position: relative;
    min-height: 2rem;
    text-align-last: center;
    text-align: center;
    -ms-text-align-last: center;
    -moz-text-align-last: center;

    div {
      line-height: 2rem;

      &.selectbox-display {
        width: 100%;
        min-width: 8rem;
        cursor: pointer;
      }
    }
  }

  span.time-connector {
    display: inline-block;
    margin: 2px 0;
  }

  ul.option-container {
    width: 100%;
    max-height: 500px;
    position: absolute;
    top: 2.3rem;
    left: 0;
    z-index: 9999;
    background-color: ${({ theme }) => theme.colors.bg.normal};
    border-radius: 7px;
    padding: ${({ theme }) => theme.space.xs} 0;
    overflow-y: scroll;
    ${({ theme }) => theme.customScroll};
    ${({ theme }) => theme.boxShadow};
  }

  li {
    height: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: ${({ theme }) => theme.space.xxs} ${({ theme }) => theme.space.xs};

    &:hover {
      background-color: ${({ theme }) => theme.colors.bg.hover};
      ${({ theme }) => theme.concept.glassmorphism.deep};
      box-shadow: 0 7px 10px 0 rgba(31, 31, 135, 0.05);
    }
  }
`;
