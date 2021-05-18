import { MouseEventHandler, useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const modalController: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (
      e.currentTarget !== e.target &&
      e.currentTarget.className !== 'modal-close'
    )
      return;
    setIsOpen(!isOpen);
  };
  return { isOpen, modalController };
};
