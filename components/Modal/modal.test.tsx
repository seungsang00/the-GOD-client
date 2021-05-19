import React, { ReactElement } from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
Enzyme.configure({ adapter: new Adapter() });
import Modal from './index';

describe('Modal component', () => {
  let TestComponent: ReactElement;

  before(() => {
    TestComponent = <div>테스트용 컴포넌트</div>;
  });

  describe('Modal isOpen ', () => {
    // 모달 테스트
    it('isOpen이 false이면 렌더링하지 않는다', () => {
      const TestModal = shallow(
        <Modal isOpen={false} handler={() => {}} component={TestComponent} />
      );
      expect(TestModal.find('.modal-close').isEmptyRender()).to.have.true;
    });

    it('isOpen이 true이면 인자로 받은 component를 렌더링 한다', () => {
      const TestModal = shallow(
        <Modal isOpen={true} handler={() => {}} component={TestComponent} />
      );
      expect(TestModal.contains(TestComponent)).to.equal(true);
    });
  });

  describe('Modal handler test', () => {
    const onButtonClick = sinon.spy();
    const TestModal = shallow(
      <Modal isOpen={true} handler={onButtonClick} component={TestComponent} />
    );
    it('x버튼을 누르면 handler가 호출된다', () => {
      TestModal.find('.modal-close').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });
    it('배경을 클릭하면 handler가 호출된다', () => {
      TestModal.first().simulate('click');
      expect(onButtonClick).to.have.property('callCount', 2);
    });
  });
});
