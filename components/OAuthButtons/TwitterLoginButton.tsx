import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ButtonOAuth } from './OAuthButton.style';

interface TwitterLoginProps {
  onClick: () => void;
}
const TwitterLoginButton = ({ onClick }: TwitterLoginProps) => {
  return (
    <ButtonOAuth onClick={onClick}>
      <FontAwesomeIcon icon={faTwitter} />
      <span>Twitter</span>
    </ButtonOAuth>
  );
};

export default TwitterLoginButton;
