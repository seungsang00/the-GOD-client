import React from 'react';
import { configure, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });
import PasswordInput from './index';

describe('PasswordInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('PasswordInput 유효성 검사(6~10자 영문, 숫자 조합)', () => {
    before(() => {
      wrapper = shallow(<PasswordInput />);
      wrapper.find('input').simulate('change', { target: { value: 'hello' } });
    });
    it('입력을 시작하기 전에는 에러메시지 표시안함', () => {
      expect(wrapper.find('.error').exists()).to.be.false;
      expect(wrapper.find('p').exists()).to.be.false;
      expect(wrapper.find('.error').exists()).to.not.true;
    });
    it(
      '입력값이 유효하지 않을 경우 에러메시지 표시' /*, () => {
      expect(wrapper.find('.error').exists()).to.be.true;
      expect(wrapper.find('.error').text()).to.be.equal(
        '비밀번호는 6~10자 영문, 숫자 조합으로 작성해주세요'
      );
    }*/
    );
    it(
      '입력값이 유효하지 않을 경우 input classList에 invalid 추가' /*, () => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellowor0' } });
      expect(wrapper.find('input').hasClass('invalid')).to.be.true;
      expect(wrapper.find('input').hasClass('invalid')).to.be.false;
    }*/
    );
    it(
      '입력값이 유효한 경우 input classList에 valid 추가' /*, () => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellowor09' } });
      expect(wrapper.find('input').hasClass('valid')).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellow12' } });
      expect(wrapper.find('input').hasClass('valid')).to.be.true;
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'hellow12-' } });
      expect(wrapper.find('input').hasClass('valid')).to.be.false;
    }*/
    );
  });
  describe('visible control button(눈모양 버튼)', () => {
    it('inactive 상태의 버튼을 클릭하여 class가 active가 된 경우 input의 type은 text로 변경', () => {
      wrapper = shallow(<PasswordInput />);
      wrapper.find('#visibleController').simulate('click');
      expect(wrapper.find('#visibleController').hasClass('active')).to.be.true;
      expect(wrapper.find('#visibleController').hasClass('inactive')).to.be
        .false;
      expect(wrapper.find('input').prop('type')).to.equal('text');
    });
    it('active 상태의 버튼을 클릭하면 버튼의 class가 inactive가 되고 input의 type은 password로 변경', () => {
      wrapper = shallow(<PasswordInput />);
      wrapper.find('#visibleController').simulate('click');
      wrapper.find('#visibleController').simulate('click');
      expect(wrapper.find('#visibleController').hasClass('inactive')).to.be
        .true;
      expect(wrapper.find('#visibleController').hasClass('active')).to.be.false;
      expect(wrapper.find('input').prop('type')).to.equal('password');
    });
  });
});
