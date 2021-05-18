import React, { ReactElement } from 'react';
import ModalStyle from './Modal.style';
import { ModalProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({
  isOpen = false,
  component,
  handler,
}: ModalProps): ReactElement | null => {
  if (!isOpen) return null;
  return (
    <ModalStyle onClick={handler}>
      <div className="modal-box">
        <div className="modal-close" onClick={handler}>
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="modal-component-box">{component}</div>
      </div>
    </ModalStyle>
  );
};
export default Modal;
