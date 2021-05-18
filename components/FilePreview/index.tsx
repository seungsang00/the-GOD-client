import React, { ReactElement } from 'react';
import { PreviewContainer } from './FilePreview.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface FilePreviewProps {
  url?: string;
  handleRemoveFile: () => void;
}
const FilePreview = ({
  url,
  handleRemoveFile,
}: FilePreviewProps): ReactElement => {
  return (
    <>
      {url && (
        <PreviewContainer>
          <img src={url} alt="uploaded file preview" />
          <FontAwesomeIcon
            className="button-file-remove"
            icon={faTimesCircle}
            onClick={handleRemoveFile}
          />
        </PreviewContainer>
      )}
    </>
  );
};

export default FilePreview;
