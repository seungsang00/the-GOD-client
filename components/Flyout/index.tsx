import { FlyoutProps } from '@interfaces';
import { FlyoutStyle } from './Flyout.style';

const Flyout = ({ isOpen, children, handler }: FlyoutProps) => {
  return (
    <>
      {isOpen && (
        <FlyoutStyle className="flyout-overlay" onClick={handler}>
          <div className="flyout-content">{children}</div>
        </FlyoutStyle>
      )}
    </>
  );
};

export default Flyout;
