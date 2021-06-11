import styled from '@styles/themed-components';

export const Wrapper = styled.div`
  margin-right: ${({ theme }) => theme.space.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #2a283e;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.bg.pressed};
  }

  & > img {
    width: 20px;
    height: 20px;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;
