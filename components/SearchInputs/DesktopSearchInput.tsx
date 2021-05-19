import React, { ReactElement } from 'react';
import { DesktopSearchInputProps } from 'interfaces/search';
import {
  FullSearchInputContainer,
  FullSearchOptionContainer,
} from './SearchInputs.style';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';

const DesktopSearchInput = ({
  values,
  options,
  handleInputClick,
  handleOptionClick,
}: DesktopSearchInputProps): ReactElement => {
  return (
    <>
      <FullSearchInputContainer className="search-input-area">
        <input
          name="artist"
          value={
            values.artist.join('')
              ? values.artist.join(' ')
              : '아티스트를 선택해주세요'
          }
          onClick={(e) => handleInputClick(e, optionData)}
          readOnly
        />
        <input
          name="location"
          value={
            values.location.join('')
              ? values.location.join(' ')
              : '위치를 선택해주세요'
          }
          onClick={(e) => handleInputClick(e, optionData)}
          readOnly
        />
        <input
          name="dates"
          value={
            values.dates.join('')
              ? values.dates.join(' ')
              : '일정을 선택해주세요'
          }
          onClick={(e) => handleInputClick(e, optionData)}
          placeholder="일정을 선택해주세요"
          readOnly
        />
      </FullSearchInputContainer>
      <FullSearchOptionContainer className="search-input-option-area">
        <ul className="search-input-option">
          {options &&
            options.map((el: string, idx: number) => (
              <li
                className={`option${idx + 1}`}
                key={el}
                onClick={() => handleOptionClick(el)}
              >
                {el}
              </li>
            ))}
        </ul>
      </FullSearchOptionContainer>
    </>
  );
};

export default DesktopSearchInput;
