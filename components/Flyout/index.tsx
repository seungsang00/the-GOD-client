import { FlyoutProps } from '@interfaces';
import { FlyoutStyle } from './Flyout.style';

const Flyout = ({ children, handler }: FlyoutProps) => {
  return (
    <FlyoutStyle className="flyout-overlay" onClick={handler}>
      <div className="flyout-content">{children}</div>
    </FlyoutStyle>
  );
};

export default Flyout;
