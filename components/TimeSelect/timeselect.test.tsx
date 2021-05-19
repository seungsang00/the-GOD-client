import React from 'react';
import { configure, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });
import TimeSelect from './index';

describe('TimeSelect component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  const testHandler = (HHorMM: string) => console.log(HHorMM);
  before(() => {
    wrapper = shallow(
      <TimeSelect setHour={testHandler} setMinutes={testHandler} />
    );
  });

  it('TimeSelect는 시를 입력받는 select와 분을 입력받는 select를 하나씩 가져야합니다', () => {
    expect(wrapper.find('select')).to.have.length(2);
    expect(wrapper.find('select[name="hour"]')).to.have.length(1);
    expect(wrapper.find('select[name="minutes"]')).to.have.length(1);
  });

  it('시를 입력받는 select의 옵션은 24개(00~23)가 존재해야 합니다', () => {
    expect(wrapper.find('select[name="hour"]').find('option')).to.have.length(
      24
    );
  });

  it('분을 입력받는 select의 옵션은 60개(00~59)가 존재해야 합니다', () => {
    expect(
      wrapper.find('select[name="minutes"]').find('option')
    ).to.have.length(60);
  });
});
