import React from 'react';
import { Button, Modal } from '@components';
import { PopupWithTitleProps, PopupWithTitleContentProps } from '@interfaces';
import { ContentWrapper } from './Popup.style';

const WithTitle = ({
  isNoti,
  title,
  description,
  buttonText,
  buttonHandler,
}: PopupWithTitleContentProps) => {
  return (
    <ContentWrapper>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
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

const PopupWithTitle = ({
  isOpen,
  modalController,
  isNoti,
  title,
  description,
  buttonText,
  buttonHandler,
}: PopupWithTitleProps) => {
  return (
    <Modal
      isOpen={isOpen}
      handler={modalController}
      component={
        <WithTitle
          isNoti={isNoti}
          title={title}
          description={description}
          buttonHandler={buttonHandler}
          buttonText={buttonText}
        />
      }
    />
  );
};

export default PopupWithTitle;
