import React from 'react';
import { configure, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });
import Button from './index';

describe('Button component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;

  it('버튼은 text값을 받는다.', () => {
    const text = '버튼입니다.';
    wrapper = shallow(
      <Button disabled={false} text={text} handler={() => {}} />
    );
    expect(wrapper.text()).to.be.equal(text);
  });
  describe('disabled test', () => {
    const onButtonClick = spy();
    beforeEach(() => {
      onButtonClick.resetHistory();
    });
    it('disabled이라면 버튼 이벤트가 실행 안함', () => {
      wrapper = shallow(
        <Button disabled={true} text={'1'} handler={onButtonClick} />
      );
      expect(wrapper.first().prop('disabled')).to.be.true;
    });

    it('disabled가 false이면 핸들러 실행', () => {
      wrapper = shallow(
        <Button disabled={false} text={'1'} handler={onButtonClick} />
      );
      expect(wrapper.first().prop('disabled')).to.be.false;
      wrapper.simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });
  });
});
