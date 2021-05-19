import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Badge from './index';

describe('Badge component', () => {
  describe('Badge render test', () => {
    it('children로 전달받은 텍스트가 Badge에 표시되어야 합니다.', () => {
      const wrapper = shallow(<Badge>COMEBACK</Badge>);
      expect(wrapper.find('.badge').text()).to.be.equal('COMEBACK');
    });
  });
});
