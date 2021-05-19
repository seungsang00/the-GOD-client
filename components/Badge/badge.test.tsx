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

    it('props로 textcolor가 주어질 경우 BadgeContainer에 전달되어야 합니다', () => {
      const wrapper = shallow(<Badge textcolor="blue">COMEBACK</Badge>);
      expect(wrapper.find('.badge').prop('textcolor')).to.be.equal('blue');
    });

    it('props로 bgcolor가 주어질 경우 BadgeContainer에 전달되어야 합니다', () => {
      const wrapper = shallow(
        <Badge textcolor="blue" bgcolor="orange">
          COMEBACK
        </Badge>
      );
      expect(wrapper.find('.badge').prop('bgcolor')).to.be.equal('orange');
      expect(wrapper.find('.badge').prop('bgcolor')).to.not.equal('blue');
    });
  });
});
