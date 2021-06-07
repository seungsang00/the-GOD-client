import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import React from 'react';
import Header from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

describe('Header component', () => {
  describe('Header render test', () => {
    it('header안에는 logo와 gnb가 존재한다', () => {
      const TestGnbComponent = (
        <ul>
          <li>My Page</li>
        </ul>
      );
      const wrapper = shallow(<Header gnb={TestGnbComponent} />);
      expect(wrapper.find('.logo')).to.have.length(1);
      expect(wrapper.find('.gnb')).to.have.length(1);
    });
    it('.logo 안에는 서비스명이 h1 태그 안에 텍스트로 들어가야 한다', () => {
      const TestLogoComponent = <FontAwesomeIcon icon={faHeart} />;
      const TestGnbComponent = <FontAwesomeIcon icon={faUser} />;
      const wrapper = shallow(
        <Header logo={TestLogoComponent} gnb={TestGnbComponent} />
      );
      expect(wrapper.find('.logo').find('h1').text()).to.be.equal('FansSum');
      expect(wrapper.find('.logo').text()).to.be.not.equal('FansSum');
    });
    it('logo 컴포넌트를 props로 받은 경우 .logo 안에는 인자로 받은 컴포넌트가 들어간다', () => {
      const TestLogoComponent = <FontAwesomeIcon icon={faHeart} />;
      const TestGnbComponent = <FontAwesomeIcon icon={faUser} />;
      const wrapper1 = shallow(
        <Header logo={TestLogoComponent} gnb={TestGnbComponent} />
      );
      const wrapper2 = shallow(<Header gnb={TestGnbComponent} />);
      expect(wrapper1.find('.logo').contains(TestLogoComponent)).to.equal(true);
      expect(wrapper2.find('.logo').contains(TestLogoComponent)).to.equal(
        false
      );
      expect(wrapper1.find('.logo').contains(TestGnbComponent)).to.equal(false);
    });
    it('.gnb 안에는 인자로 받은 컴포넌트가 들어간다', () => {
      const TestLogoComponent = <FontAwesomeIcon icon={faHeart} />;
      const TestGnbComponent = <FontAwesomeIcon icon={faUser} />;
      const wrapper = shallow(
        <Header logo={TestLogoComponent} gnb={TestGnbComponent} />
      );
      expect(wrapper.find('.logo').contains(TestGnbComponent)).to.equal(false);
      expect(wrapper.find('.gnb').contains(TestGnbComponent)).to.equal(true);
    });
  });
});
