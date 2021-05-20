import React from 'react';
import { shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import Carousel from './index';

describe('carousel component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  const fakeData = new Array(8).fill(0);
  const fekeChildren = fakeData.map((_el, i) => <div key={i}>1</div>);
  describe('carousel prop', () => {
    before(() => {
      wrapper = shallow(
        <Carousel isArrow={false} isPage={false} col={2}>
          {fekeChildren}
        </Carousel>
      );
    });
    it('isPage이 fales이면 페이지 전환 버튼 표시 안함', () => {
      expect(wrapper.find('.pagination').exists()).to.be.false;
    });
    it('isArrow이면 페이지 전환 버튼 표시', () => {
      expect(wrapper.find('.arrwo-box').exists()).to.be.false;
    });
  });
  describe('col에 따른 pagination 갯수 변화', () => {
    it('col = 4', () => {
      wrapper = shallow(
        <Carousel isArrow={true} isPage={true} col={4}>
          {fekeChildren}
        </Carousel>
      );
      expect(wrapper.find('.pagination').children()).to.have.lengthOf(2);
    });
    it('col = 2', () => {
      wrapper = shallow(
        <Carousel isArrow={true} isPage={true} col={2}>
          {fekeChildren}
        </Carousel>
      );
      expect(wrapper.find('.pagination').children()).to.have.lengthOf(4);
    });
    it('col = 1', () => {
      wrapper = shallow(
        <Carousel isArrow={true} isPage={true} col={1}>
          {fekeChildren}
        </Carousel>
      );
      expect(wrapper.find('.pagination').children()).to.have.lengthOf(8);
    });
  });
  describe('carousel index test', () => {
    describe('nav button test', () => {
      before(() => {
        wrapper = shallow(
          <Carousel isArrow={true} isPage={true} col={2}>
            {fekeChildren}
          </Carousel>
        );
      });
      it('우측 버튼 (next 버튼)클릭하면 인덱스가 증가', () => {
        wrapper.find('.right').simulate('click');
        expect(wrapper.prop('index')).to.be.equal(1);
      });
      it('prev 버튼 클릭하면 인덱스 감소', () => {
        wrapper.find('.left').simulate('click');
        expect(wrapper.prop('index')).to.be.equal(0);
      });
      it('index가 0이면 prev 버튼 클릭 했을 때 맨뒤로', () => {
        wrapper.find('.left').simulate('click');
        expect(wrapper.prop('index')).to.be.equal(3);
      });
      it('끝까지 왔다면이면 next 버튼 클릭 했을 때 맨 앞으로', () => {
        wrapper.find('.right').simulate('click');
        expect(wrapper.prop('index')).to.be.equal(0);
      });
    });

    describe('pagination button test', () => {
      it('pagination 클릭하면 해당 페이지로 이동', () => {
        wrapper.find('.pagination').childAt(1).simulate('click');
        expect(wrapper.prop('index')).to.be.equal(1);
        wrapper.find('.pagination').childAt(3).simulate('click');
        expect(wrapper.prop('index')).to.be.equal(3);
      });
    });
  });
});
