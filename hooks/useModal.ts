import { MouseEventHandler, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
export default useModal;
