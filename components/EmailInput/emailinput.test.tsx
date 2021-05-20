import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import EmailInput from './index';
import { mountWithTheme } from '@utils/testUtils';

describe('EmailInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('EmailInput 유효성 검사', () => {
    before(() => {
      wrapper = mountWithTheme(<EmailInput />);
    });

    it('입력을 시작하기 전에는 에러메시지 표시안함', () => {
      expect(wrapper.find('.error').exists()).to.be.false;
      expect(wrapper.find('p').exists()).to.be.false;
      expect(wrapper.find('.error').exists()).to.not.true;
    });

    it('입력값이 이메일 형식에 맞지 않는 경우 에러메시지 표시', () => {
      wrapper.find('input').simulate('change', { target: { value: 'hello' } });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hello@gmail' } });
      expect(wrapper.find('.error').exists()).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hello@gmail.com' } });
      expect(wrapper.find('.error').exists()).to.be.false;
    });
  });
});

// FIXME: onChange 이벤트를 트리거로 하는 state변화에 따른 클래스 부여 등을 테스트하는 방법을 찾는 중입니다. 수정이 필요합니다
