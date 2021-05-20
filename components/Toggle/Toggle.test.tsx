import React, { ReactElement } from 'react';
import { shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import Toggle from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('Toggle component', () => {
  let TestComponent: ReactElement;
  let wrapper: ShallowWrapper | ReactWrapper;
  before(() => {
    wrapper = shallow(
      <Toggle value={false} icon="parking" handler={() => {}} />
    );
    TestComponent = <FontAwesomeIcon icon="parking" />;
  });

  it('토글은 아이콘과 텍스트를 가지고 있다', () => {
    expect(wrapper.find('.toggle-icon').contains(TestComponent)).to.be.equal(
      true
    );
    expect(wrapper.find('.toggle-text').text()).to.be.equal('주차 가능');
  });

  describe('value test', () => {
    it('value이 false이면 비활성화 상태', () => {
      wrapper = shallow(
        <Toggle value={false} icon="parking" handler={() => {}} />
      );
      expect(wrapper.find('input').prop('checked')).to.equal(false);
    });

    it('value이 true이면 활성화 상태', () => {
      wrapper = shallow(
        <Toggle value={true} icon="parking" handler={() => {}} />
      );
      expect(wrapper.find('input').prop('checked')).to.equal(true);
    });
  });

  describe('handler test', () => {
    it('toggle을 클릭하면 handler가 호출된다', () => {
      const onButtonClick = spy();
      wrapper = shallow(
        <Toggle value={false} icon="parking" handler={onButtonClick} />
      );
      wrapper.find('.toggle-box').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });
  });
});
