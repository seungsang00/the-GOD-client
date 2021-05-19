import React, { ReactElement } from 'react';
import {
  SidebarContainer,
  StepIndicator,
  StepGuideContainer,
} from './OrderSidebar.style';

const OrderSidebar = (): ReactElement => {
  return (
    <SidebarContainer>
      <ul className="steps">
        <li className="step step-001">
          <StepIndicator className="indicator indicator-step-001">
            1
          </StepIndicator>
          <StepGuideContainer className="visible-desktop-only">
            데스크톱에서만 보입니다
          </StepGuideContainer>
        </li>
        <li className="step step-002">
          <StepIndicator className="indicator indicator-step-002">
            2
          </StepIndicator>
          <StepGuideContainer className="visible-desktop-only">
            데스크톱에서만 보입니다
          </StepGuideContainer>
        </li>
        <li className="step step-003">
          <StepIndicator className="indicator indicator-step-003">
            3
          </StepIndicator>
          <StepGuideContainer className="visible-desktop-only">
            데스크톱에서만 보입니다
          </StepGuideContainer>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default OrderSidebar;
