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
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;

  & > .dropdown-content {
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.zIndex.depth03};
    position: absolute;
    width: ${({ size }) => size};
  }
`;

export const DropdownTriggerStyle = styled.div`
  ${({ theme }) => theme.zIndex.depth03};
  button {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    word-break: keep-all;
  }
`;
