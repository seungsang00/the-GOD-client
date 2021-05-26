import React, { ReactNode, ReactElement, MouseEvent } from 'react';
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
  const testHandler = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    console.dir(e.target);
    // console.log(e.target.textContent);
  };
  return (
    <DropdownStyle size={size} visible={visible}>
      <div className="dropdown-content" onClick={testHandler}>
        {children}
      </div>
    </DropdownStyle>
  );
};

export default Dropdown;
