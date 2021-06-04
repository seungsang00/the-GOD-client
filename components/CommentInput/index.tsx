import { Avatar } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TextArea } from 'components/TextInput';
import { CommentInputStyle } from './CommentInput.style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getInfoThunk } from 'modules/user';
import { CommentInputProps } from '@interfaces';

const CommentInput = ({ handler, value, onChange }: CommentInputProps) => {
  // TODO: 스토어에서 사용자 프로필이미지를 가져와야 합니다
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window) localStorage.getItem('accessToken') && dispatch(getInfoThunk()); // 사용자 정보 요청
  }, []);

  return (
    <CommentInputStyle>
      <section className="cinput-avatar-section">
        <Avatar
          profileImage={
            (data?.profileImage as string) || '/images/avatar_default.jpg'
          }
          size={2.5}
        />
      </section>
      <section className="comment-input-section">
        <TextArea
          placeholder={`댓글을 입력하세요...`}
          disabled={false}
          value={value}
          onChange={onChange}
        />
        <span className="button-comment-submit" onClick={handler}>
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </section>
    </CommentInputStyle>
  );
};

export default CommentInput;
