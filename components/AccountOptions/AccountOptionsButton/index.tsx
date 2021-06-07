import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccountOptionsProps } from '@interfaces';
import { OptionsButtonContainer } from './AccountOptionsButton.style';

const AccountOptionsButton = ({
  handler,
}: AccountOptionsProps): ReactElement => {
  return (
    <OptionsButtonContainer className="account-options-button">
      <button onClick={handler}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </OptionsButtonContainer>
  );
};

export default AccountOptionsButton;
