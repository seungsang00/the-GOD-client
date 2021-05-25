import { MouseEventHandler, useState } from 'react';

const useFlyout = (initState: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initState);
  const flyoutController: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (
      e.currentTarget !== e.target &&
      e.currentTarget.className === 'flyout-content'
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };
  return { isOpen, flyoutController };
};
export default useFlyout;
