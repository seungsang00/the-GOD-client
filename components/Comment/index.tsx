import { Avatar, Flyout, TextButton } from '@components';
import { CommentStyle } from './Comment.style';
import { API_ENDPOINT, IComment } from '@interfaces';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import useFlyout from 'hooks/useFlyout';
import { useState } from 'react';
import { TextArea } from 'components/TextInput';
import axios from 'axios';
import useTextInput from 'hooks/useTextInput';

type Props = {
  commentData: IComment;
  handleClickDelete: () => void;
};
const Comment = ({ commentData, handleClickDelete }: Props) => {
  const [data, setData] = useState<IComment>(commentData);
  const { id, author, comments, createdAt } = data;
  const [editmode, setEditMode] = useState<boolean>(false);
  const { isOpen, flyoutController } = useFlyout(false);
  const { inputEvent } = useTextInput(comments);
  const { value, onChange, onKeyDown } = inputEvent;

  const token: string | null = localStorage.getItem('accessToken');

  const userId = '019jkdkjbf1r0882939'; // FIXME: store에서 사용자 아이디 받아오기

  const submitEditedComment = async () => {
    console.log(`edit!`);
    // TODO: 서버에 요청을 보내고, 응답 상태에 따라 핸들링하는 과정이 추가되어야 합니다
    // if ok,
    const now = new Date();
    setData({ ...data, comments: value, createdAt: moment(now).fromNow() });
    setEditMode(false);
  };

  const { username, profileImage } = author;
  return (
    <CommentStyle>
      <section className="c-avatar-section">
        <Avatar profileImage={profileImage} size={3} />
      </section>
      <section>
        <div className="comment-top">
          <div className="comment-info">
            <div className="comment-author">{username}</div>
            <span className="time-ago">
              {moment(createdAt, 'YYYY-MM-DD').fromNow()}
            </span>
          </div>
          {editmode ? (
            <span>
              <TextButton
                disabled={false}
                text="수정"
                handler={submitEditedComment}
              />
              <TextButton
                disabled={false}
                text="취소"
                handler={() => setEditMode(false)}
              />
            </span>
          ) : (
            <span className="comment-action-trigger" onClick={flyoutController}>
              <FontAwesomeIcon icon={faEllipsisV} />
              {isOpen && (
                <Flyout handler={flyoutController}>
                  <ul>
                    {userId === author.userId ? (
                      <>
                        <li
                          className="flyout-option"
                          onClick={() => setEditMode(true)}
                        >
                          Edit
                        </li>
                        <li
                          className="flyout-option"
                          onClick={handleClickDelete}
                        >
                          Delete
                        </li>
                      </>
                    ) : (
                      <li className="flyout-option">신고</li>
                    )}
                  </ul>
                </Flyout>
              )}
            </span>
          )}
        </div>
        {editmode ? (
          <TextArea
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={false}
          />
        ) : (
          <p>{comments}</p>
        )}
      </section>
    </CommentStyle>
  );
};

export default Comment;
