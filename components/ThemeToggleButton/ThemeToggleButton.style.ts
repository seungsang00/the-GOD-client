import styled from '@styles/themed-components';

export const Wrapper = styled.div`
  /* position: absolute;
  top: 0;
  right: 100px;
  bottom: 0; */
  margin-right: ${({ theme }) => theme.space.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 30px;
  border-radius: 100px;
  background-color: #2a283e;
  overflow: hidden;
  cursor: pointer;
  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 4.2px;
    left: 4.1px;
    transition: 0.5s ease;
  }
  &:before {
    background-color: #d9e4f5;
    background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  }

  &:after {
    background-color: #2a283e;
    left: -38px;
    transform: scale(0.00001);
  }
`;

export const Checkbox = styled.input`
  display: none;
  &:checked + label {
    &:before {
      background-color: #d9e4f5;
      background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
      transform: translateX(30px);
    }

    &:after {
      transform: translateX(60px) scale(1);
    }
  }
`;
