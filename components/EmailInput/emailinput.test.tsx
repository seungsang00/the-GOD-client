import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import EmailInput from './index';
import { mountWithTheme } from '@utils/testUtils';

describe('EmailInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  afterEach(() => wrapper.unmount());
  const fakeSetValue = (text: string) => console.log(text);

  it('props로 전달받은 value가 input에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <EmailInput
        value={'test@example.com'}
        setValue={fakeSetValue}
        error={null}
      />
    );
    expect(wrapper.find('input').prop('value')).to.be.equal('test@example.com');
    expect(wrapper.find('p').exists()).to.be.false;
    expect(wrapper.find('.error').exists()).to.not.true;
  });

  it('props로 전달받은 error가 존재할 경우 p.error에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <EmailInput value={'a'} setValue={fakeSetValue} error={'error message'} />
    );
    expect(wrapper.find('p').exists()).to.be.true;
    expect(wrapper.find('.error').exists()).to.be.true;
    expect(wrapper.find('.error').text()).to.be.equal('error message');
  });
});

// FIXME: onChange 이벤트를 트리거로 하는 state변화에 따른 클래스 부여 등을 테스트하는 방법을 찾는 중입니다. 수정이 필요합니다
