import { Comment, CommentInput } from '@components';
import useFlyout from 'hooks/useFlyout';
import useTextInput from 'hooks/useTextInput';
import { createCommentThunk, getCommentListThunk } from 'modules/comment';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query as { id: string };
  const { inputEvent } = useTextInput('');
  const { isOpen, flyoutController } = useFlyout(false);

  const { loading, error, data } = useSelector(
    (state: RootState) => state.comment.list
  );
  const { data: newCommentData } = useSelector(
    (state: RootState) => state.comment.create
  );

  const handleSubmitNewComment = () => {
    const comment = { id, comment: inputEvent.value };
    dispatch(createCommentThunk(comment));
  };

  const handleFlyout = () => {};

  useEffect(() => {
    if (id) dispatch(getCommentListThunk(id));
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  // TODO: 에러 발생시 커스텀 404 페이지 띄우기
  useEffect(() => {
    inputEvent.setValue && inputEvent.setValue(''); // 댓글추가가 정상적으로 이루어지면 댓글 인풋창 초기화
    if (id) dispatch(getCommentListThunk(id));
  }, [newCommentData]);

  return (
    <article>
      <CommentInput handler={handleSubmitNewComment} {...inputEvent} />
      {loading && <p>loading...</p>}
      {data &&
        data
          .sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
          .map((comment) => (
            <Comment
              key={comment.id}
              commentData={comment}
              isOpen={isOpen}
              flyoutController={flyoutController}
            />
          ))}
    </article>
  );
};

export default Comments;
