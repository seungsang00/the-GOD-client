import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import DesktopSearchInput from './DesktopSearchInput';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';

const testValues1 = {
  artist: ['ENHYPEN', 'ALL'],
  location: ['서울', '강남구'],
  dates: ['2021/05/19', '2021/05/21'],
};

const testValues2 = {
  artist: ['ENHYPEN', 'ALL'],
  location: ['', ''],
  dates: ['2021/05/19', '2021/05/21'],
};
const testHandler = () => console.log(`test handler`);

describe('DesktopSearchInput component', () => {
  describe('DesktopSearchInput render test', () => {
    it('.search-input-area와 .search-input-option-area 엘리먼트가 각각 1개씩 렌더 되어야 한다', () => {
      const wrapper = shallow(
        <DesktopSearchInput
          values={testValues1}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.search-input-option-area')).to.have.length(1);
    });

    it('.search-input-area에는 3개의 input이 존재해야합니다', () => {
      const wrapper = shallow(
        <DesktopSearchInput
          values={testValues1}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.search-input-area').find('input')).to.have.length(
        3
      );
    });

    it('props로 전달받은 해당 input의 value가 모두 빈문자열일 경우 placeholder를 보여줘야 합니다', () => {
      const wrapper1 = shallow(
        <DesktopSearchInput
          values={testValues1}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      const wrapper2 = shallow(
        <DesktopSearchInput
          values={testValues2}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(
        wrapper1.find('input[name="location"]').prop('value')
      ).to.not.equal('위치를 선택해주세요');
      expect(wrapper1.find('input[name="location"]').prop('value')).to.be.equal(
        '서울 강남구'
      );
      expect(wrapper2.find('input[name="location"]').prop('value')).to.be.equal(
        '위치를 선택해주세요'
      );
    });
  });

  describe('DesktopSearchInput handler test', () => {
    const onInputClick = spy();
    const onOptionClick = spy();
    const wrapper = shallow(
      <DesktopSearchInput
        values={testValues1}
        options={Object.keys(optionData.location)}
        handleInputClick={onInputClick}
        handleOptionClick={onOptionClick}
      />
    );

    it('input을 클릭하면 props로 전달받은 handleInputClick이 실행되어야합니다', () => {
      wrapper.find('input[name="artist"]').simulate('click');
      expect(onInputClick).to.have.property('callCount', 1);
      wrapper.find('input[name="location"]').simulate('click');
      wrapper.find('input[name="artist"]').simulate('click');
      wrapper.find('ul').simulate('click');
      expect(onInputClick).to.have.property('callCount', 3);
      wrapper.find('input[name="dates"]').simulate('click');
      expect(onInputClick).to.have.property('callCount', 4);
    });

    it('옵션을 클릭하면 props로 전달받은 handleOptionClick이 실행되어야합니다', () => {
      wrapper.find('li.option1').simulate('click');
      expect(onOptionClick).to.have.property('callCount', 1);
      wrapper.find('li.option2').simulate('click');
      wrapper.find('li.option3').simulate('click');
      expect(onOptionClick).to.have.property('callCount', 3);
    });
  });
});
