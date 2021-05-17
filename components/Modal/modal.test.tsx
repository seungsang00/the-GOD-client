import React, { ReactElement } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
Enzyme.configure({ adapter: new Adapter() });
import Modal from './index';

describe('Modal component', () => {
  describe('모달은 3개의 인자를 받는다', () => {
    it('isOpen이 false이면 렌더링하지 않는다', () => {
      const testComponent: ReactElement = <div>테스트용 컴포넌트</div>;
      const TestModal = shallow(
        <Modal isOpen={false} handler={() => {}} component={testComponent} />
      );
      expect(TestModal.find('.modal-close').isEmptyRender()).to.equal(true);
    });
    it('isOpen이 true이면 인자로 받은 component를 렌더링 한다', () => {});
    // 모달 테스트
    // 모달은 3개의 인풋을 받는다. 열린 상태, 상태 변환 함수, 랜더할 컴포넌트
    // 모달은 핸들러를 통해서 열린 상태가 변경 가능하다
    // 받은 컴포넌트를 렌더링 한다
    // 열린상태가 falsy면 아무것도 반환하지 않는다.
  });
});
