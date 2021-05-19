import React from 'react';
import { configure, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });
import Carousel from './index';

describe('Guide component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  describe('Guide prop', () => {
    const onResetClick = spy();
    const onShareClick = spy();
    const onActiveClick = spy();

    it('각 버튼 핸들러에 따라 한번씩 실행', () => {
      wrapper = shallow(<Carousel />);
      wrapper.find('.guide-reset').simulate('click');
      wrapper.find('.guide-close').simulate('click');
      wrapper.find('.guide-share').simulate('click');
      wrapper.find('.guide-root').simulate('click');
      expect(onActiveClick).to.have.property('callCount', 2);
      expect(onShareClick).to.have.property('callCount', 1);
      expect(onResetClick).to.have.property('callCount', 1);
    });
  });
});
