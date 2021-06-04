import { MouseEvent, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalController = (e: MouseEvent | undefined) => {
    if (e !== undefined) {
      e.stopPropagation();
      // FIXME: e.currentTarget !== e.target 이어도 모달 컨트롤을 할 수 있게 수정해야 합니다. (사유: AuthModal 작동 안함)
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
