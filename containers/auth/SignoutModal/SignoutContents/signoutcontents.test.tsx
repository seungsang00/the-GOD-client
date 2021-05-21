import React from 'react';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { mountWithTheme } from '@utils/testUtils';
import {
  SignoutFirstStep,
  // SignoutSecondStep,
  // SignoutResult,
} from '.';

describe('SignoutFirstStep component', () => {
  let wrapper: ShallowWrapper | ReactWrapper;
  const userEmail = 'test@test.com';
  const onButtonClick = spy();
  it('p.user-email에 props로 전달해준 사용자의 이메일정보가 표시되어야 합니다', () => {
    wrapper = mountWithTheme(
      <SignoutFirstStep email={userEmail} handler={onButtonClick} />
    );
    expect(
      wrapper.find('section').at(1).find('.user-email').text()
    ).to.be.equal(userEmail);
  });
  it('button-area에 위치한 버튼을 클릭하면 props로 전달받은 handler가 실행되어야 합니다', () => {
    wrapper = mountWithTheme(
      <SignoutFirstStep email={userEmail} handler={onButtonClick} />
    );
    wrapper.first().find('.button-area').find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

// TODO: SignoutSecondStep, SignoutResult 테스트 코드 작성하기
// describe('SignoutSecondStep component', () => {
//   let wrapper: ShallowWrapper | ReactWrapper;
//   const userEmail = 'test@test.com';
//   const onButtonClick = spy();
//   it('p.user-email에 props로 전달해준 사용자의 이메일정보가 표시되어야 합니다', () => {
//     wrapper = mountWithTheme(
//       <SignoutSecondStep email={userEmail} handler={onButtonClick} />
//     );
//     expect(
//       wrapper.find('section').at(1).find('.user-email').text()
//     ).to.be.equal(userEmail);
//   });
//   it('button-area에 위치한 버튼을 클릭하면 props로 전달받은 handler가 실행되어야 합니다', () => {
//     wrapper = mountWithTheme(
//       <SignoutSecondStep email={userEmail} handler={onButtonClick} />
//     );
//     wrapper.first().find('.button-area').find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
// });
