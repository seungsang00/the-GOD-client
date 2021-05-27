import styled, { withProps } from '@styles/themed-components';

type Props = {
  size: string;
  visible: boolean;
};

export const DropdownStyle = withProps<Props, HTMLDivElement>(styled.div)`
  ${({ theme }) => theme.zIndex.depth02};
  ${({ visible }) => (visible ? 'display: flex' : 'display: none')};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(255, 255, 25, 0.3);

  & > .dropdown-content {
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.zIndex.depth03};
    position: absolute;
    width: ${({ size }) => size};
    border: 1px solid blue;
    background-color: pink;
  }
`;

export const DropdownTriggerStyle = styled.div`
  ${({ theme }) => theme.zIndex.depth03};
  button {
    cursor: pointer;
  }
`;
