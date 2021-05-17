import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ButtonOAuth } from './OAuthButton.style';

interface KakaoLoginProps {
  onClick: () => void;
}
const KakaoLoginButton = ({ onClick }: KakaoLoginProps) => {
  return (
    <ButtonOAuth onClick={onClick}>
      <FontAwesomeIcon icon={faComment} />
      <span>Kakao</span>
    </ButtonOAuth>
  );
};

export default KakaoLoginButton;
