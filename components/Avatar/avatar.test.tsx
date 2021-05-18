import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Avatar from './index';

describe('Avatar component', () => {
  describe('Avatar render test', () => {
    it('props.profileImage로 전달받은 이미지 url이 img의 src속성에 전달되어야 합니다', () => {
      const wrapper = shallow(
        <Avatar profileImage="https://bit.ly/2T0knSZ" size={3} />
      );
      expect(wrapper.find('img').prop('src')).to.equal(
        'https://bit.ly/2T0knSZ'
      );
    });
    it('props로 전달받은 size가 AvatarContainer에 props로 전달되어야 합니다', () => {
      const wrapper1 = shallow(
        <Avatar profileImage="https://bit.ly/2T0knSZ" size={3} />
      );
      const wrapper2 = shallow(
        <Avatar profileImage="https://bit.ly/2T0knSZ" size={6} />
      );
      expect(wrapper1.find('.avatar-container').prop('size')).to.equal(3);
      expect(wrapper2.find('.avatar-container').prop('size')).to.equal(6);
    });
  });
});
