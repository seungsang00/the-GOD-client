import { Avatar } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TextArea } from 'components/TextInput';
import { CommentInputStyle } from './CommentInput.style';
import { sampleUserProfile1 } from '@utils/sample-data';
import { useState } from 'react';

const CommentInput = () => {
  const [text, setText] = useState<string>('');

  const { profileImage } = sampleUserProfile1; // TODO: 스토어에서 사용자 프로필이미지를 가져와야 합니다
  return (
    <CommentInputStyle>
      <section className="cinput-avatar-section">
        <Avatar profileImage={profileImage} size={2.5} />
      </section>
      <section className="comment-input-section">
        <TextArea placeholder={`댓글을 입력하세요...`} handler={setText} />
        <span className="button-comment-submit">
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </section>
    </CommentInputStyle>
  );
};

export default CommentInput;
