import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import SearchInput from './index';

describe('SearchInput component', () => {
  describe('SearchInput render test', () => {
    it('.search-input-area와 .input-options-area 엘리먼트가 각각 1개씩 렌더 되어야 한다', () => {
      const wrapper = shallow(
        <SearchInput
          value={['', '']}
          options={{
            ENHYPEN: ['희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
            IU: null,
          }}
          handleInputClick={{
            first: () => console.log(`first input click`),
            second: () => console.log(`second input click`),
          }}
          handleOptionClick={(selected: string, depth: number) =>
            console.log(`handleOptionClick ${selected}, ${depth}`)
          }
        />
      );
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.input-options-area')).to.have.length(1);
    });

    it('.search-input-area 안에 2개의 input을 렌더해야 한다', () => {
      const wrapper = shallow(
        <SearchInput
          value={['', '']}
          options={{
            ENHYPEN: ['희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
            IU: null,
          }}
          handleInputClick={{
            first: () => console.log(`first input click`),
            second: () => console.log(`second input click`),
          }}
          handleOptionClick={(selected: string, depth: number) =>
            console.log(`handleOptionClick ${selected}, ${depth}`)
          }
        />
      );
      expect(wrapper.find('.search-input-area').find('input')).to.have.length(
        2
      );
      expect(
        wrapper.find('.search-input-area').find('.input-first-depth')
      ).to.have.length(1);
      expect(
        wrapper.find('.search-input-area').find('.input-second-depth')
      ).to.have.length(1);
    });

    it('openOptionDep값이 1이나 2라면 .input-options-area 안에 1개의 ul이 렌더되어야 한다', () => {
      const wrapper = shallow(
        <SearchInput
          value={['', '']}
          openOptionDep={1}
          options={{
            ENHYPEN: ['희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
            IU: null,
          }}
          handleInputClick={{
            first: () => console.log(`first input click`),
            second: () => console.log(`second input click`),
          }}
          handleOptionClick={(selected: string, depth: number) =>
            console.log(`handleOptionClick ${selected}, ${depth}`)
          }
        />
      );
      expect(wrapper.find('.input-options-area').find('ul')).to.have.length(1);
    });

    it('openOptionDep값이 주어지지 않는다면 .input-options-area 안에 ul을 렌더하지 않는다', () => {
      const wrapper = shallow(
        <SearchInput
          value={['', '']}
          options={{
            ENHYPEN: ['희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
            IU: null,
          }}
          handleInputClick={{
            first: () => console.log(`first input click`),
            second: () => console.log(`second input click`),
          }}
          handleOptionClick={(selected: string, depth: number) =>
            console.log(`handleOptionClick ${selected}, ${depth}`)
          }
        />
      );
      expect(wrapper.find('.input-options-area').find('ul')).to.have.length(0);
    });
  });
  describe('SearchInput handler test', () => {
    const onFirstInputClick = sinon.spy();

    const onSecondInputClick = sinon.spy();

    const onOptionClick = sinon.spy();

    const testInputHandler = {
      first: onFirstInputClick,
      second: onSecondInputClick,
    };

    const wrapper = shallow(
      <SearchInput
        value={['ENHYPEN', '']}
        options={{
          ENHYPEN: ['희승', '정원', '제이', '제이크', '성훈', '선우', '니키'],
          IU: null,
        }}
        openOptionDep={2}
        handleInputClick={testInputHandler}
        handleOptionClick={onOptionClick}
      />
    );

    it('.input-first-depth를 클릭하면 props로 내려받은 handleInputClick.first가 실행된다', () => {
      wrapper.find('.input-first-depth').simulate('click');
      wrapper.find('.input-options-area').simulate('click');
      expect(onFirstInputClick).to.have.property('callCount', 1);
    });

    it('.input-second-depth를 클릭하면 props로 내려받은 handleInputClick.second가 실행된다', () => {
      wrapper.find('.input-second-depth').simulate('click');
      wrapper.find('.input-options-area').simulate('click');
      expect(onSecondInputClick).to.have.property('callCount', 1);
    });

    it('옵션을 클릭하면 props로 내려받은 handleOptionClick이 실행된다', () => {
      wrapper.find('.input-options-area').simulate('click');
      wrapper.find('#secondOption1').simulate('click');
      expect(onOptionClick).to.have.property('callCount', 1);
    });
  });
});
