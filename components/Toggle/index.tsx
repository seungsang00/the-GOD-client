import React, { ReactElement } from 'react';
import ToggleStyle from './Toggle.style';
import { ToggleProps } from '@interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = ({ value, icon, handler }: ToggleProps): ReactElement => {
  const text = {
    parking: '주차 가능',
    bus: '버스 정류장',
    train: '기차역',
    baby: '유아용 좌석',
    cat: '반려동물 출입가능',
    subway: '지하철',
  };
  return (
    <ToggleStyle value={value}>
      <input type="checkbox" checked={value} onChange={() => {}} />
      <div className="toggle-box" onClick={handler}>
        <div className="toggle-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="toggle-text">{text[icon]}</div>
      </div>
    </ToggleStyle>
  );
};

export default Toggle;
