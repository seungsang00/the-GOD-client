import React, { ReactElement } from 'react';
import { FileInputForm } from './FileInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FileInputProps } from '@interfaces';

const FileInput = ({
  handleFileChange,
  inputButton,
}: FileInputProps): ReactElement => {
  return (
    <FileInputForm>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="fileInput">
        {inputButton ? inputButton : <FontAwesomeIcon icon={faPlus} />}
      </label>
    </FileInputForm>
  );
};

export default FileInput;
