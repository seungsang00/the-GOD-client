import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import FilePreview from './index';

const testHandler = () => console.log(`delete this file`);

describe('FilePreview component', () => {
  describe('FilePreview render test', () => {
    it('props로 전달받은 url이 img태그에 src로 전달되어야 합니다', () => {
      const testwrapper1 = shallow(
        <FilePreview
          url={`https://bit.ly/2RqhQRq`}
          handleRemoveFile={testHandler}
        />
      );
      const testwrapper2 = shallow(
        <FilePreview
          url={`https://bit.ly/2QyrukM`}
          handleRemoveFile={testHandler}
        />
      );

      expect(testwrapper1.find('img').prop('src')).to.equal(
        'https://bit.ly/2RqhQRq'
      );
      expect(testwrapper2.find('img').prop('src')).to.equal(
        'https://bit.ly/2QyrukM'
      );
    });

    it('props로 전달받은 url이 없다면 아무것도 렌더되지 않아야 합니다', () => {
      const testwrapper1 = shallow(
        <FilePreview handleRemoveFile={testHandler} />
      );
      const testwrapper2 = shallow(
        <FilePreview
          url={`https://bit.ly/2QyrukM`}
          handleRemoveFile={testHandler}
        />
      );

      expect(testwrapper1.find('img')).to.have.length(0);
      expect(testwrapper2.find('img')).to.have.length(1);
    });

    it('img태그의 alt 속성값이 "uploaded file preview"로 설정되어야 합니다', () => {
      const testwrapper1 = shallow(
        <FilePreview
          url={`https://bit.ly/2RqhQRq`}
          handleRemoveFile={testHandler}
        />
      );
      const testwrapper2 = shallow(
        <FilePreview
          url={`https://bit.ly/2QyrukM`}
          handleRemoveFile={testHandler}
        />
      );

      expect(testwrapper1.find('img').prop('alt')).to.equal(
        'uploaded file preview'
      );
      expect(testwrapper2.find('img').prop('alt')).to.equal(
        'uploaded file preview'
      );
    });
  });

  describe('FilePreview handler test', () => {
    it('x버튼을 클릭했을 때 props로 전달받은 handler가 호출된다', () => {
      const onFileRemove = sinon.spy();
      const wrapper = shallow(
        <FilePreview
          url={`https://bit.ly/2QyrukM`}
          handleRemoveFile={onFileRemove}
        />
      );

      wrapper.find('.button-file-remove').simulate('click');
      wrapper.find('img').simulate('click');
      expect(onFileRemove).to.have.property('callCount', 1);
    });
  });
});
