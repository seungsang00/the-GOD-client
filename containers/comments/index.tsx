import { Comment } from '@components';
import { getCommentListThunk } from 'modules/comment';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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

  return (
    <article>
      {loading && <p>loading...</p>}
      {data && data.map((comment) => <Comment commentData={comment} />)}
    </article>
  );
};

export default Comments;
