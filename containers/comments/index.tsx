import { Comment, CommentInput } from '@components';
import useTextInput from 'hooks/useTextInput';
import { createCommentThunk, getCommentListThunk } from 'modules/comment';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
  const router = useRouter();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.comment.list
  );
  const { id } = router.query as { id: string };
  useEffect(() => {
    if (id) getCommentListThunk(id);
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const { inputEvent } = useTextInput('');
  const { data: newCommentData } = useSelector(
    (state: RootState) => state.comment.create
  );
  const dispatch = useDispatch();
  const handleSubmitNewComment = () => {
    const comment = { contentId: id, comment: inputEvent.value };
    dispatch(createCommentThunk(comment));
    // TODO: 댓글추가가 정상적으로 이루어지면 댓글 인풋창 초기화
    if (newCommentData) {
      inputEvent.value = '';
    }
  };
  useEffect(() => {
    if (id) getCommentListThunk(id);
  }, [newCommentData]);

  return (
    <article>
      {loading && <p>loading...</p>}
      <CommentInput handler={handleSubmitNewComment} {...inputEvent} />
      {data && data.map((comment) => <Comment commentData={comment} />)}
    </article>
  );
};

export default Comments;
