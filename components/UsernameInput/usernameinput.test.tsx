import React from 'react';
import { configure, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });
import UsernameInput from './index';

describe('UsernameInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('UsernameInput 유효성 검사', () => {
    before(() => {
      wrapper = shallow(<UsernameInput />);
    });
    it('입력을 시작하기 전에는 에러메시지 표시안함', () => {
      expect(wrapper.find('.error').exists()).to.be.false;
      expect(wrapper.find('p').exists()).to.be.false;
      expect(wrapper.find('.error').exists()).to.not.true;
    });
    it('한글, 영문 대소문자 이외의 입력값이 있는 경우 에러메시지 표시', () => {
      wrapper.find('input').simulate('change', { target: { value: 'hello' } });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: '테스트닉네임' } });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper.find('input').simulate('change', { target: { value: 'hello*' } });
      expect(wrapper.find('.error').exists()).to.be.false;
    });
    it(
      '입력값이 2글자 이하이거나 15글자 이상인 경우 에러메시지 표시' /*, () => {
      wrapper.find('input').simulate('change', { target: { value: 'ㅇ' } });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper.find('input').simulate('change', {
        target: { value: '열다섯글자가넘어가는닉네임입니다몹시기네요' },
      });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: '적당한길이의닉네임' } });
      expect(wrapper.find('.error').exists()).to.be.false;
    }*/
    );
  });
});

// FIXME: onChange 이벤트에 따른 클래스 부여 등의 변화를 테스트하는 방법을 찾는 중입니다. 수정이 필요합니다
