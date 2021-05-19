import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import FileInput from './index';

describe('FileInput component', () => {
  describe('FileInput render test', () => {
    it('내부에 1개의 input과 1개의 label이 존재해야 한다', () => {
      const wrapper = shallow(
        <FileInput handleFileChange={() => console.log(`upload file`)} />
      );
      expect(wrapper.find('input')).to.have.length(1);
      expect(wrapper.find('label')).to.have.length(1);
    });
  });

  describe('FileInput handler test', () => {
    it('input의 값이 변했을 때 props로 전달받은 handler가 호출된다', () => {
      const onFileChange = sinon.spy();
      const wrapper = shallow(<FileInput handleFileChange={onFileChange} />);
      wrapper.find('input').simulate('change');
      wrapper.find('input').simulate('click');
      wrapper.find('label').simulate('click');
      expect(onFileChange).to.have.property('callCount', 1);
    });
  });
});
