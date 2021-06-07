import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import PasswordInput from './index';
import { mountWithTheme } from '@utils/testUtils';

describe('PasswordInput component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  afterEach(() => wrapper.unmount());
  const fakeSetValue = (text: string) => console.log(text);

  it('props로 전달받은 value가 input에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <PasswordInput
        value={'qwerty1234'}
        setValue={fakeSetValue}
        error={null}
      />
    );
    expect(wrapper.find('input').prop('value')).to.be.equal('qwerty1234');
    expect(wrapper.find('p').exists()).to.be.false;
    expect(wrapper.find('.error').exists()).to.not.true;
  });

  it('props로 전달받은 error가 존재할 경우 p.error에 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <PasswordInput
        value={'a'}
        setValue={fakeSetValue}
        error={'error message'}
      />
    );
    expect(wrapper.find('p').exists()).to.be.true;
    expect(wrapper.find('.error').exists()).to.be.true;
    expect(wrapper.find('.error').text()).to.be.equal('error message');
  });

  it('props로 전달받은 error가 존재할 경우 input classList에 invalid가 존재해야 합니다', () => {
    wrapper = mountWithTheme(
      <PasswordInput
        value={'hellowor0*'}
        setValue={fakeSetValue}
        error={'error message'}
      />
    );
    expect(wrapper.find('input').html()).to.be.equal(
      '<input id="pwInput" type="password" placeholder="Password" value="hellowor0*" class="invalid">'
    );

    wrapper = mountWithTheme(
      <PasswordInput
        value={'hellowor0*'}
        setValue={fakeSetValue}
        error={'error message'}
      />
    );
    expect(wrapper.find('input').html()).to.be.equal(
      '<input id="pwInput" type="password" placeholder="Password" value="hellowor0*" class="invalid">'
    );
  });

  it('props로 전달받은 error가 null일 경우 input classList에 valid가 존재해야합니다', () => {
    wrapper = mountWithTheme(
      <PasswordInput
        value={'hellowor09'}
        setValue={fakeSetValue}
        error={null}
      />
    );
    expect(wrapper.find('input').html()).to.be.equal(
      '<input id="pwInput" type="password" placeholder="Password" value="hellowor09" class="valid">'
    );
  });

  describe('visible control button(눈모양 버튼)', () => {
    it('inactive 상태의 버튼을 클릭하여 class가 active가 된 경우 input의 type은 text로 변경', () => {
      wrapper = mountWithTheme(
        <PasswordInput
          value={'hellowor0*'}
          setValue={fakeSetValue}
          error={'error message'}
        />
      );
      wrapper.find('#visibleController').simulate('click');
      wrapper.update();
      expect(wrapper.find('input').prop('type')).to.equal('text');
    });
    it('active 상태의 버튼을 클릭하면 버튼의 class가 inactive가 되고 input의 type은 password로 변경', () => {
      wrapper = mountWithTheme(
        <PasswordInput
          value={'hellowor09'}
          setValue={fakeSetValue}
          error={null}
        />
      );
      wrapper.find('#visibleController').simulate('click');
      wrapper.update(); // active -> inactive
      wrapper.find('#visibleController').simulate('click');
      wrapper.update(); // inactive -> active
      expect(wrapper.find('input').prop('type')).to.equal('password');
    });
  });
});
