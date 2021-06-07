import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import UsernameInput from './index';
import { mountWithTheme } from '@utils/testUtils';

const fakeSetValue = (text: string) => console.log(text);

describe('UsernameInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  afterEach(() => wrapper.unmount());

  it('props로 전달받은 value가 input에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <UsernameInput value={'닉네임'} setValue={fakeSetValue} error={null} />
    );
    expect(wrapper.find('input').prop('value')).to.be.equal('닉네임');
    expect(wrapper.find('p').exists()).to.be.false;
    expect(wrapper.find('.error').exists()).to.not.true;
  });

  it('props로 전달받은 error가 존재할 경우 p.error에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <UsernameInput
        value={'a'}
        setValue={fakeSetValue}
        error={'error message'}
      />
    );
    expect(wrapper.find('p').exists()).to.be.true;
    expect(wrapper.find('.error').exists()).to.be.true;
    expect(wrapper.find('.error').text()).to.be.equal('error message');
  });
});
