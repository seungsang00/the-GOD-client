import { MouseEvent, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalController = (e: MouseEvent | undefined) => {
    if (e !== undefined) {
      e.stopPropagation();
      if (
        e.currentTarget !== e.target &&
        e.currentTarget.className !== 'modal-close'
      ) {
        return;
      }
      setIsOpen(!isOpen);
    } else if (isOpen) {
      setIsOpen(false);
    }
  };
  return { isOpen, modalController, setIsOpen };
};
export default useModal;
