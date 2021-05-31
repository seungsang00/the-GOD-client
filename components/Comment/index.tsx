import { Avatar, Flyout, TextButton } from '@components';
import { CommentStyle } from './Comment.style';
import { IComment } from '@interfaces';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import useFlyout from 'hooks/useFlyout';
import { useEffect, useState } from 'react';
import { TextArea } from 'components/TextInput';
import useTextInput from 'hooks/useTextInput';
// import { sampleCommentsData } from '@utils/sample-data';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getInfoThunk } from 'modules/user';
import {
  deleteCommentThunk,
  getCommentListThunk,
  updateCommentThunk,
} from 'modules/comment';
import { useRouter } from 'next/router';

type Props = {
  commentData: IComment;
};
const Comment = ({ commentData }: Props) => {
  const router = useRouter();
  const { id: contentId } = router.query as { id: string };

  const { id: commentId, author, comments, createdAt } = commentData;
  const { name, profileImage } = author;

  const [editmode, setEditMode] = useState<boolean>(false);

  const { isOpen, flyoutController } = useFlyout(false);

  const { inputEvent } = useTextInput(comments);
  const { value, onChange, onKeyDown } = inputEvent;

  // ! Store 구독
  const { data: userData } = useSelector(
    (state: RootState) => state.user.userProfile
  );
  const { data: deleteData } = useSelector(
    (state: RootState) => state.comment.delete
  );
  const { data: updateData } = useSelector(
    (state: RootState) => state.comment.update
  );

  // ! userId 가져오기
  // const userId = '019jkdkjbf1r0882939';
  let userId: string | undefined;
  useEffect(() => {
    getInfoThunk();
    if (userData) userId = userData.id;
  }, []);

  // ! 삭제 후 다시 불러오기
  useEffect(() => {
    if (!deleteData) getCommentListThunk(contentId);
  }, [deleteData]);

  // ! 수정 후 다시 불러오기
  useEffect(() => {
    if (!updateData) {
      getCommentListThunk(contentId);
      setEditMode(false);
    }
  }, [updateData]);

  return (
    <CommentStyle>
      <section className="c-avatar-section">
        <Avatar profileImage={profileImage} size={3} />
      </section>
      <section>
        <div className="comment-top">
          <div className="comment-info">
            <div className="comment-author">{name}</div>
            <span className="time-ago">
              {moment(createdAt, 'YYYY-MM-DD').fromNow()}
            </span>
          </div>
          {editmode ? (
            <span>
              <TextButton
                disabled={false}
                text="수정"
                handler={() =>
                  updateCommentThunk({ id: commentId, comment: value })
                }
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
                    {userId && userId === author.id ? (
                      <>
                        <li
                          className="flyout-option"
                          onClick={() => setEditMode(true)}
                        >
                          Edit
                        </li>
                        <li
                          className="flyout-option"
                          onClick={() => deleteCommentThunk(commentId)}
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
