import React, { ReactElement } from 'react';
import { DesktopSearchInputProps, SearchInputBarProps } from '@interfaces';
import { DatePicker } from '@components';
import {
  FullSearchOptionContainer,
  SearchInputSection,
} from './SearchInputs.style';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';

const DesktopSearchInput = ({
  values,
  options,
  handleInputClick,
  handleOptionClick,
  showDatePicker,
  dates,
  handleDateChange,
  focusedInput,
  handleFocusInput,
}: DesktopSearchInputProps): ReactElement => {
  return (
    <>
      <SearchInputBar values={values} handleInputClick={handleInputClick} />
      {showDatePicker ? (
        <DatePicker
          dates={dates}
          handleDateChange={handleDateChange}
          focusedInput={focusedInput}
          handleFocusInput={handleFocusInput}
          numberOfMonths={2}
        />
      ) : (
        <FullSearchOptionContainer className="search-input-option-area">
          <ul className="search-input-option">
            {options &&
              options.map((el: string, idx: number) => (
                <li
                  className={`option${idx + 1}`}
                  key={el}
                  onClick={() => handleOptionClick(el)}
                >
                  <span>{el}</span>
                </li>
              ))}
          </ul>
        </FullSearchOptionContainer>
      )}
    </>
  );
};

export const SearchInputBar = ({
  values,
  handleInputClick,
}: SearchInputBarProps) => {
  return (
    <SearchInputSection>
      <div className="col field">
        <h5>아티스트</h5>
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
      </div>
      <div className="col field">
        <h5>위치</h5>
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
      </div>
      <div className="col row">
        <div className="col field">
          <h5>일정</h5>
          <input
            name="dates"
            value={
              values.dates.join('')
                ? values.dates.join(' ~ ')
                : '일정을 선택해주세요'
            }
            onClick={(e) => handleInputClick(e, optionData)}
            placeholder="일정을 선택해주세요"
            readOnly
          />
        </div>
        <div className="button-submit">
          <button onClick={() => console.log('search!')}>검색</button>
        </div>
      </div>
    </SearchInputSection>
  );
};

export default DesktopSearchInput;
