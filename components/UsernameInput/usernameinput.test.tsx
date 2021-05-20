import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import UsernameInput from './index';
import { mountWithTheme } from '@utils/testUtils';

describe('UsernameInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('UsernameInput 유효성 검사', () => {
    before(() => {
      wrapper = mountWithTheme(<UsernameInput />);
    });
    it('입력을 시작하기 전에는 에러메시지 표시안함', () => {
      expect(wrapper.find('.error').exists()).to.be.false;
      expect(wrapper.find('p').exists()).to.be.false;
      expect(wrapper.find('.error').exists()).to.not.true;
    });

    it('한글, 영문 대소문자 이외의 입력값이 있는 경우 에러메시지 표시', () => {
      wrapper.find('input').simulate('change', { target: { value: 'hello*' } });
      wrapper.update();
      expect(wrapper.find('.error').html()).to.be.equal(
        '<p class="error">한글, 영문 대소문자를 이용해 2~15자로 작성해주세요</p>'
      );

      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hello_0' } });
      wrapper.update();
      expect(wrapper.find('.error').html()).to.be.equal(
        '<p class="error">한글, 영문 대소문자를 이용해 2~15자로 작성해주세요</p>'
      );
    });

    it('입력값이 2글자 이하이거나 15글자 이상인 경우 에러메시지 표시', () => {
      wrapper.find('input').simulate('change', { target: { value: 'ㅇ' } });
      wrapper.update();
      expect(wrapper.find('.error').html()).to.be.equal(
        '<p class="error">한글, 영문 대소문자를 이용해 2~15자로 작성해주세요</p>'
      );

      wrapper.find('input').simulate('change', {
        target: {
          value: '열다섯글자가넘어가는닉네임입니다longlongenough',
        },
      });
      wrapper.update();
      expect(wrapper.find('.error').html()).to.be.equal(
        '<p class="error">한글, 영문 대소문자를 이용해 2~15자로 작성해주세요</p>'
      );
    });
  });
});
