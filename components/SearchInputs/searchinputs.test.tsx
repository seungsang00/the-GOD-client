import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import React from 'react';
import SearchInputs from './index';

describe('SearchInputs container', () => {
  describe('SearchInputs render test', () => {
    it('.search-input-area와 .search-input-option-area 엘리먼트가 각각 1개씩 렌더 되어야 한다', () => {
      const wrapper = shallow(<SearchInputs />);
      expect(wrapper.find('.search-input-area')).to.have.length(1);
      expect(wrapper.find('.search-input-option-area')).to.have.length(1);
    });

    it('.search-input-area 안에 2개의 input을 렌더해야 한다', () => {
      const wrapper = shallow(<SearchInputs />);
      expect(wrapper.find('.search-input-area').find('input')).to.have.length(
        2
      );
    });
  });
});

// TODO: props가 없는 컴포넌트의 테스트 코드를 작성하는 방법
