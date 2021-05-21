import React from 'react';
import { mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import TimeSelect from './index';

describe('TimeSelect component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  const testHandler = (HHorMM: string) => console.log(HHorMM);

  before(() => {
    wrapper = mount(
      <TimeSelect setHour={testHandler} setMinutes={testHandler} />
    );
  });

  it('TimeSelect는 시와 분을 입력받는 필드를 하나씩 가져야합니다', () => {
    expect(wrapper.find('article')).to.have.length(2);
    expect(wrapper.find('.selectbox-hour')).to.have.length(1);
    expect(wrapper.find('.selectbox-minutes')).to.have.length(1);
  });

  // it('', () => {
  //   expect(wrapper.find('article')).to.have.length(2);
  //   expect(wrapper.find('.selectbox-hour')).to.have.length(1);
  //   expect(wrapper.find('.selectbox-minutes')).to.have.length(1);
  // });

  it('isOptionOpenH이 true이면 시를 입력받는 select의 옵션이 24개(00~23)가 렌더되어야 합니다', () => {
    wrapper.find('.selectbox-display').first().simulate('click');
    expect(wrapper.find('ul').children()).to.have.lengthOf(24);
  });

  it('시를 입력받는 select의 옵션은 24개(00~23)가 존재해야 합니다', () => {
    expect(
      wrapper.find('.selectbox-hour').find('ul').children()
    ).to.have.lengthOf(24);
  });

  it('분을 입력받는 select의 옵션은 6개(00~50, 10분 간격)가 존재해야 합니다', () => {
    wrapper.find('.selectbox-display').at(1).simulate('click');
    expect(
      wrapper.find('.selectbox-minutes').find('ul').find('.option')
    ).to.have.length(6);
  });
});
