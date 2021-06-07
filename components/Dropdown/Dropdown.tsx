import React, { ReactNode, ReactElement } from 'react';
import { DropdownStyle } from './Dropdown.style';

interface DropdownProps {
  visible: boolean;
  size?: string;
  children: ReactNode;
}

const Dropdown = ({
  visible,
  size = '100%',
  children,
}: DropdownProps): ReactElement => {
  return (
    <DropdownStyle size={size} visible={visible}>
      <div className="dropdown-content">{children}</div>
    </DropdownStyle>
  );
};

export default Dropdown;
