import React from 'react';
import { Button, Modal } from '@components';
import { PopupProps, PopupContentProps } from '@interfaces';
import { ContentWrapper } from './Popup.style';

const NoTitle = ({
  isNoti,
  description,
  buttonText,
  buttonHandler,
}: PopupContentProps) => {
  return (
    <ContentWrapper>
      <div>
        <p>{description}</p>
      </div>
      <div className="button-area">
        {!isNoti && (
          <Button disabled={false} text={'취소'} handler={buttonHandler} />
        )}
        <Button
          disabled={false}
          text={buttonText || '확인'}
          handler={buttonHandler}
        />
      </div>
    </ContentWrapper>
  );
};

const PopupNoTitle = ({
  isOpen,
  modalController,
  isNoti,
  description,
  buttonText,
  buttonHandler,
}: PopupProps) => {
  return (
    <Modal
      isOpen={isOpen}
      handler={modalController}
      component={
        <NoTitle
          isNoti={isNoti}
          description={description}
          buttonHandler={buttonHandler}
          buttonText={buttonText}
        />
      }
    />
  );
};

export default PopupNoTitle;
