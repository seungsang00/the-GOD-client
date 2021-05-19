import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';
import MobileSearchInput from './MobileSearchInput';

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

describe('MobileSearchInput component', () => {
  describe('MobileSearchInput render test', () => {
    it('.search-input-area와 .search-input-option-area 엘리먼트가 각각 1개씩 렌더 되어야 한다', () => {
      const wrapper = shallow(
        <MobileSearchInput
          values={testValues1}
          currentField={'artist'}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.search-input-option-area')).to.have.length(1);
    });

    it('.search-input-area에는 1개의 input만 존재해야합니다', () => {
      const wrapper = shallow(
        <MobileSearchInput
          values={testValues1}
          currentField={'artist'}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.search-input-area').find('input')).to.have.length(
        1
      );
      expect(
        wrapper.find('.search-input-area').find('input')
      ).to.not.have.length(3);
    });

    it('props로 전달받은 values와 무관하게 input의 value는 placeholder가 되어야합니다', () => {
      const wrapper1 = shallow(
        <MobileSearchInput
          values={testValues1}
          currentField={'location'}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      const wrapper2 = shallow(
        <MobileSearchInput
          values={testValues2}
          currentField={'location'}
          options={Object.keys(optionData.location)}
          handleInputClick={testHandler}
          handleOptionClick={testHandler}
        />
      );
      expect(
        wrapper1.find('input[name="location"]').prop('value')
      ).to.not.equal('서울 강남구');
      expect(wrapper1.find('input[name="location"]').prop('value')).to.be.equal(
        '찾고싶은 지역을 선택해주세요'
      );
      expect(wrapper2.find('input[name="location"]').prop('value')).to.be.equal(
        '찾고싶은 지역을 선택해주세요'
      );
    });
  });

  describe('MobileSearchInput handler test', () => {
    const onInputClick = spy();
    const onOptionClick = spy();
    const wrapper = shallow(
      <MobileSearchInput
        values={testValues1}
        currentField={'artist'}
        options={Object.keys(optionData.location)}
        handleInputClick={onInputClick}
        handleOptionClick={onOptionClick}
      />
    );

    it('input을 클릭하면 props로 전달받은 handleInputClick이 실행되어야합니다', () => {
      wrapper.find('input').simulate('click');
      expect(onInputClick).to.have.property('callCount', 1);
      wrapper.find('ul').simulate('click');
      expect(onInputClick).to.have.property('callCount', 1);
      wrapper.find('input').simulate('click');
      expect(onInputClick).to.have.property('callCount', 2);
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
