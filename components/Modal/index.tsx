import { ReactElement } from 'react';
import ModalStyle from './Modal.styles';
import { ModalProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({
  isOpen,
  component,
  handler,
}: ModalProps): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <ModalStyle>
      <div className="modal-box">
        <div className="Modal-close" onClick={handler}>
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="component-box">{component}</div>
      </div>
    </ModalStyle>
  );
};
export default Modal;
