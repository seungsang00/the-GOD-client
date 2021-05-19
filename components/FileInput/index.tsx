import React, { ReactElement } from 'react';
import { FileInputHandler } from 'interfaces/inputhandler';
import { FileInputForm } from './FileInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FileInput = ({ handleFileChange }: FileInputHandler): ReactElement => {
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
        <FontAwesomeIcon icon={faPlus} />
      </label>
    </FileInputForm>
  );
};

export default FileInput;
