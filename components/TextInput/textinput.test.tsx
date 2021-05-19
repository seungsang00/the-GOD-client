import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { TextInput, TextArea } from './index';

describe('TextInput component', () => {
  describe('TextInput render test', () => {
    it('props로 전달받은 placeholder가 input의 placeholder 속성에 전달되어야 합니다', () => {
      const wrapper = shallow(<TextInput placeholder="test placeholder" />);
      expect(wrapper.find('.textinput').prop('placeholder')).to.equal(
        'test placeholder'
      );
    });
  });

  describe('TextInput handler test', () => {
    it('input에 text를 입력했을때 input의 value가 변경되어야 합니다', () => {
      const wrapper1 = shallow(<TextInput placeholder="test placeholder" />);
      const wrapper2 = shallow(<TextInput placeholder="test placeholder" />);

      wrapper1
        .find('.textinput')
        .simulate('change', { target: { value: 'hello' } });
      wrapper2
        .find('.textinput')
        .simulate('change', { target: { value: 'dear' } });
      expect(wrapper1.find('.textinput').prop('value')).to.be.equal('hello');
      expect(wrapper2.find('.textinput').prop('value')).to.be.equal('dear');
    });
  });
});

describe('TextArea component', () => {
  describe('TextArea render test', () => {
    it('props로 전달받은 placeholder가 textarea의 placeholder 속성에 전달되어야 합니다', () => {
      const wrapper = shallow(<TextArea placeholder="test placeholder" />);
      expect(wrapper.find('.textarea').prop('placeholder')).to.equal(
        'test placeholder'
      );
    });
  });

  describe('TextArea handler test', () => {
    it('textarea에 text를 입력했을때 value가 변경되어야 합니다', () => {
      const wrapper1 = shallow(<TextArea placeholder="test placeholder" />);
      const wrapper2 = shallow(<TextArea placeholder="test placeholder" />);

      wrapper1
        .find('.textarea')
        .simulate('change', { target: { value: 'hello' } });
      wrapper2
        .find('.textarea')
        .simulate('change', { target: { value: 'dear' } });
      expect(wrapper1.find('.textarea').prop('value')).to.be.equal('hello');
      expect(wrapper2.find('.textarea').prop('value')).to.be.equal('dear');
    });
  });
});
