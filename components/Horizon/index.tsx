import { HorizonProps } from 'interfaces/props';
import { HorizonSection } from './horizon.style';

const Horizon = ({ text }: HorizonProps) => {
  return (
    <HorizonSection>
      <div className="hr-sect">{text}</div>
    </HorizonSection>
  );
};

export default Horizon;
