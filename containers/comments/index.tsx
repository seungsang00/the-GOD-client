import { Comment, CommentInput } from '@components';
import { sampleCommentsData } from '@utils/sample-data';
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

  useEffect(() => {
    if (id) dispatch(getCommentListThunk(id));
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  useEffect(() => {
    inputEvent.setValue(''); // 댓글추가가 정상적으로 이루어지면 댓글 인풋창 초기화
    if (id) dispatch(getCommentListThunk(id));
  }, [newCommentData]);

  return (
    <article>
      {loading && <p>loading...</p>}
      <CommentInput handler={handleSubmitNewComment} {...inputEvent} />
      {data &&
        data
          .sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
          .map((comment) => <Comment commentData={comment} />)}
      {/* 아래는 삭제되어야 할 부분 (테스트용) */}
      {/* {!data &&
        sampleCommentsData.map((comment) => <Comment commentData={comment} />)} */}
    </article>
  );
};

export default Comments;
