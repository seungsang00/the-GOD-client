import {
  faCalendarWeek,
  faInfo,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import {
  SidebarContainer,
  StepIndicator,
  StepGuideContainer,
} from './OrderSidebar.style';

const OrderSidebar = ({ step }: { step: number }): ReactElement => {
  const steps = [0, 1, 2];
  const icons = [
    <FontAwesomeIcon icon={faInfo} />,
    <FontAwesomeIcon icon={faCalendarWeek} />,
    <FontAwesomeIcon icon={faMapMarkerAlt} />,
  ];
  const description = ['이벤트 정보', '이벤트 기간', '이벤트 장소'];
  return (
    <SidebarContainer>
      <ul className="steps">
        {steps.map((idx) => (
          <li
            key={idx}
            className={`step step-00${step + 1} ${
              idx === step ? 'active' : ''
            }`}
          >
            <StepIndicator className={`indicator indicator-step-00${idx + 1}`}>
              {icons[idx]}
            </StepIndicator>
            <StepGuideContainer className="visible-desktop-only">
              {description[idx]}
            </StepGuideContainer>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default OrderSidebar;
