import React, { MouseEventHandler, ReactElement } from 'react';
import { DropdownTriggerStyle } from './Dropdown.style';

interface DropdownTriggerProps {
  value: string | undefined;
  placeholder: string;
  onClick: MouseEventHandler;
}

const DropdownTrigger = ({
  value,
  placeholder,
  onClick,
}: DropdownTriggerProps): ReactElement => {
  return (
    <DropdownTriggerStyle>
      <button onClick={onClick}>{value ? value : placeholder}</button>
    </DropdownTriggerStyle>
  );
};

export default DropdownTrigger;
