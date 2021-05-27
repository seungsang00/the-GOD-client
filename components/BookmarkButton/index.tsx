import React, { ReactElement } from 'react';
import BookmarkButtonStyle from './BookmarkButton.style';
import { BookmarkButtonProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as Bookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as notBookmark } from '@fortawesome/free-regular-svg-icons';

const BookmarkButton = ({
  value,
  handler,
}: BookmarkButtonProps): ReactElement => {
  return (
    <BookmarkButtonStyle value={value}>
      <input type="checkbox" checked={value} onChange={() => {}} />
      <div className="toggle-box" onClick={handler}>
        <FontAwesomeIcon icon={value ? Bookmark : notBookmark} />
      </div>
    </BookmarkButtonStyle>
  );
};

export default BookmarkButton;
