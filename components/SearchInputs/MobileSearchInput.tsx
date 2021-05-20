import React, { ReactElement } from 'react';
import { IPlaceholders, MobileSearchInputProps } from 'interfaces/search';
import {
  MobileSearchInputContainer,
  MobileSearchOptionContainer,
} from './SearchInputs.style';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';

const MobileSearchInput = ({
  values,
  currentField,
  options,
  handleInputClick,
  handleOptionClick,
}: MobileSearchInputProps): ReactElement => {
  const placeholders: IPlaceholders = {
    artist: '아티스트를 선택해주세요',
    location: '찾고싶은 지역을 선택해주세요',
    dates: '일정을 선택해주세요',
  };

  return (
    <>
      <div>
        <span>artist: {values.artist.join()}</span>
        <span>location: {values.location.join()}</span>
      </div>
      <MobileSearchInputContainer className="search-input-area">
        <input
          name={currentField}
          value={placeholders[currentField]}
          onClick={(e) => handleInputClick(e, optionData)}
          readOnly
        />
      </MobileSearchInputContainer>
      <MobileSearchOptionContainer className="search-input-option-area">
        {currentField !== 'dates' && (
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
        )}
      </MobileSearchOptionContainer>
    </>
  );
};

export default MobileSearchInput;
