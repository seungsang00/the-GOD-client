import React from 'react';
import { ShallowWrapper, ReactWrapper, mount } from 'enzyme';
import { expect } from 'chai';
import PasswordInput from './index';
import { ThemeProvider } from '@styles/themed-components';
import theme from '@styles/theme';

function mountWithTheme(child: any) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
}

describe('PasswordInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('PasswordInput 유효성 검사(6~10자 영문, 숫자 조합)', () => {
    before(() => {
      wrapper = mountWithTheme(<PasswordInput />);
    });
    after(() => wrapper.unmount());
    it('입력을 시작하기 전에는 에러메시지 표시안함', () => {
      expect(wrapper.find('.error').exists()).to.be.false;
      expect(wrapper.find('p').exists()).to.be.false;
      wrapper.find('input').simulate('change', { target: { value: 'hello' } });
      expect(wrapper.find('.error').exists()).to.be.true;
    });
    it('입력값이 유효하지 않을 경우 에러메시지 표시', () => {
      expect(wrapper.find('.error').exists()).to.be.true;
      expect(wrapper.find('.error').text()).to.be.equal(
        '비밀번호는 6~10자 영문, 숫자 조합으로 작성해주세요'
      );
    });
    it('입력값이 유효하지 않을 경우 input classList에 invalid 추가', () => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellowor0*' } });
      wrapper.update();
      expect(wrapper.find('input').html()).to.be.equal(
        '<input id="pwInput" type="password" value="hellowor0*" class="invalid">'
      );
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellow12-' } });
      wrapper.update();
      expect(wrapper.find('input').html()).to.be.equal(
        '<input id="pwInput" type="password" value="hellow12-" class="invalid">'
      );
    });
    it('입력값이 유효한 경우 input classList에 valid 추가', () => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellowor09' } });
      wrapper.update();
      expect(wrapper.find('input').html()).to.be.equal(
        '<input id="pwInput" type="password" value="hellowor09" class="valid">'
      );
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellow12' } });
      wrapper.update();
      expect(wrapper.find('input').html()).to.be.equal(
        '<input id="pwInput" type="password" value="hellow12" class="valid">'
      );
    });
  });

  describe('visible control button(눈모양 버튼)', () => {
    afterEach(() => wrapper.unmount());
    it('inactive 상태의 버튼을 클릭하여 class가 active가 된 경우 input의 type은 text로 변경', () => {
      wrapper = mountWithTheme(<PasswordInput />);
      wrapper.find('#visibleController').simulate('click');
      wrapper.update();
      expect(wrapper.find('input').prop('type')).to.equal('text');
    });
    it('active 상태의 버튼을 클릭하면 버튼의 class가 inactive가 되고 input의 type은 password로 변경', () => {
      wrapper = mountWithTheme(<PasswordInput />);
      wrapper.find('#visibleController').simulate('click');
      wrapper.update(); // active -> inactive
      wrapper.find('#visibleController').simulate('click');
      wrapper.update(); // inactive -> active
      expect(wrapper.find('input').prop('type')).to.equal('password');
    });
  });
});
