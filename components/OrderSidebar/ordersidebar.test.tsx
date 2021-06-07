import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import React from 'react';
import { OrderSidebar } from '@components';

describe('OrderSidebar component', () => {
  describe('OrderSidebar render test', () => {
    it('3개의 step이 존재해야 합니다', () => {
      const wrapper = shallow(<OrderSidebar />);
      expect(wrapper.find('.step')).to.have.length(3);
    });

    it('li.step 안에서 indicator와 guide 영역으로 구분되어야 합니다', () => {
      const wrapper = shallow(<OrderSidebar />);
      expect(wrapper.find('.visible-desktop-only')).to.have.length(3);
      expect(
        wrapper.find('.step-001').find('.visible-desktop-only')
      ).to.have.length(1);
      expect(wrapper.find('.step').find('.indicator')).to.have.length(3);
      expect(wrapper.find('.step-001').find('.indicator')).to.have.length(1);
    });

    it('li.step 안에서 tablet display에서는 보이지 않는 영역이 구분되어야 합니다', () => {
      const wrapper = shallow(<OrderSidebar />);
      expect(wrapper.find('.visible-desktop-only')).to.have.length(3);
      expect(
        wrapper.find('.step-001').find('.visible-desktop-only')
      ).to.have.length(1);
      expect(
        wrapper.find('.step-002').find('.visible-desktop-only')
      ).to.have.length(1);
      expect(
        wrapper.find('.step-003').find('.visible-desktop-only')
      ).to.have.length(1);
    });
  });
});
