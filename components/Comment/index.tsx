import { Avatar, Flyout, TextButton } from '@components';
import { CommentStyle } from './Comment.style';
import { IComment } from '@interfaces';
import moment from 'moment';
moment.locale('ko'); // 한글화
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import useFlyout from 'hooks/useFlyout';
import { MouseEvent, MouseEventHandler, useState } from 'react';
import { TextArea } from 'components/TextInput';
import useTextInput from 'hooks/useTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { deleteCommentThunk, updateCommentThunk } from 'modules/comment';
import { PopupNoTitle } from 'components/Popup';
import useModal from 'hooks/useModal';

type Props = {
  commentData: IComment;
  flyoutController: MouseEventHandler;
  isOpen: boolean;
};
const Comment = ({ commentData, isOpen, flyoutController }: Props) => {
  const { id: commentId, user, comment, createdAt } = commentData;
  const { name, profileImage } = user;

  const dispatch = useDispatch();
  const [editmode, setEditMode] = useState<boolean>(false);
  // const { isOpen, flyoutController } = useFlyout(false);
  const { isOpen: commentPopupIsOpen, modalController } = useModal();
  const { inputEvent } = useTextInput(comment);
  const [commentValue, setCommentValue] = useState<string>(comment);

  // ! Store 구독 - 내 아이디 가져오기
  const { data: userData } = useSelector(
    (state: RootState) => state.user.userProfile
  );

  const { value, onChange, onKeyDown } = inputEvent;

  // comment ...메뉴 클릭시 팝업
  const handleClickReport = (e: MouseEvent) => {
    modalController(e);
    flyoutController(e);
  };
  const handleEditComment = () => {
    dispatch(updateCommentThunk({ id: commentId, comment: value }));
    setCommentValue(value); // comment update
    setEditMode(false);
  };

  return (
    <CommentStyle>
      <section className="c-avatar-section">
        <Avatar profileImage={profileImage} size={3} />
      </section>
      <section>
        <div className="comment-top">
          <div className="comment-info">
            <div className="comment-author">{name}</div>
            <span className="time-ago">{moment(createdAt).fromNow()}</span>
          </div>
          {editmode ? (
            <span>
              <TextButton
                disabled={false}
                text="수정"
                handler={handleEditComment}
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
                <Flyout isOpen={isOpen} handler={flyoutController}>
                  <ul>
                    {userData && userData.id === user.id ? (
                      <>
                        <li
                          className="flyout-option"
                          onClick={() => setEditMode(true)}
                        >
                          Edit
                        </li>
                        <li
                          className="flyout-option"
                          onClick={() =>
                            dispatch(deleteCommentThunk(commentId))
                          }
                        >
                          Delete
                        </li>
                      </>
                    ) : (
                      <li className="flyout-option" onClick={handleClickReport}>
                        신고
                      </li>
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
          <p>
            {commentValue.split('\n').map((el) => (
              <>
                {el}
                <br />
              </>
            ))}
          </p>
        )}
      </section>
      <PopupNoTitle
        isOpen={commentPopupIsOpen}
        modalController={modalController}
        isNoti={true}
        description={
          '서비스 준비중입니다. 빠른시일내로 준비하여 찾아뵙겠습니다.'
        }
        buttonHandler={modalController}
      />
    </CommentStyle>
  );
};

export default Comment;
