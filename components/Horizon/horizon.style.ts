import styled from '@styles/themed-components';

export const HorizonSection = styled.section`
  width: 100%;

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    margin: 8px 0px;
  }
  .hr-sect::before,
  .hr-sect::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0;
  }
  .hr-sect::before {
    margin-right: 16px;
  }
  .hr-sect::after {
    margin-left: 16px;
  }
`;
