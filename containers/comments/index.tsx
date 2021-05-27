import { Comment } from '@components';
import { API_ENDPOINT, IComment } from '@interfaces';
import { sampleCommentsData } from '@utils/sample-data';
import axios from 'axios';

interface CommentsProps {
  comments: IComment[];
}
const Comments = ({ comments = sampleCommentsData }: CommentsProps) => {
  const token: string | null = localStorage.getItem('accessToken');

  const submitEditedComment = async (id: string, comment: string) => {
    const res = await axios.put(
      `${API_ENDPOINT}/comments`,
      { id, comment },
      {
        headers: {
          authorization: token,
        },
      }
    );
    // TODO: 응답 상태에 따라 핸들링하는 과정이 추가되어야 합니다
  };

  const requestDeleteComment = async (id: string) => {
    console.log(`delete`);
    const res = await axios.delete(`${API_ENDPOINT}/comments`, {
      headers: {
        authorization: token,
      },
      data: { id },
    });
    // TODO: 응답 상태에 따라 핸들링하는 과정이 추가되어야 합니다
    // if ok,
    const remainComments = comments.filter((el) => el.id !== id);
  };

  return (
    <article>
      {comments &&
        comments.map((data) => (
          <Comment commentData={data} handleClickDelete={} />
        ))}
    </article>
  );
};

export default Comments;
