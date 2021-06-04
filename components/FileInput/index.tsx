import React, { ReactElement } from 'react';
import { FileInputForm } from './FileInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
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
        multiple
      />
      <label htmlFor="fileInput" title="이미지 업로드">
        {inputButton ? (
          inputButton
        ) : (
          <>
            <FontAwesomeIcon icon={faCamera} />
            <p>클릭해서 파일을 업로드해보세요</p>
          </>
        )}
      </label>
    </FileInputForm>
  );
};

export default FileInput;
