import React, { ReactElement, useRef, useState } from 'react';
import { SearchInputsValues } from 'interfaces/search';
import { SearchInputsSection } from './SearchInputs.style';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';

const SearchInputs = (): ReactElement => {
  const [values, setValues] = useState<SearchInputsValues>({
    artist: ['', ''],
    location: ['', ''],
  });

  const [options, setOptions] = useState<string[] | undefined>(undefined);

  const currentField = useRef<string>('');
  const currentOptionDepth = useRef<number | undefined>(undefined);

  const handleInputClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => {
    const target = e.target as HTMLInputElement;
    setOptions(Object.keys(optionData[target.name]));
    currentField.current = target.name;
    currentOptionDepth.current = 1;
  };

  const handleOptionClick = (selected: string) => {
    if (currentOptionDepth.current === 1) {
      setValues({
        ...values,
        [currentField.current as string]: [selected, ''],
      });
      const secondOptionList = optionData[currentField.current][selected];
      if (options) {
        secondOptionList ? setOptions(secondOptionList) : setOptions(undefined);
      }
      currentOptionDepth.current = 2;
    } else if (currentOptionDepth.current === 2) {
      setValues({
        ...values,
        [currentField.current as string]: [
          values[currentField.current as string][0],
          selected,
        ],
      });
      setOptions(undefined);
    }
  };

  return (
    <SearchInputsSection>
      <div className="search-input-area">
        <input
          name="artist"
          value={values.artist.join(' ')}
          onClick={(e) => handleInputClick(e, optionData)}
          placeholder="아티스트를 선택해주세요"
          readOnly
        />
        <input
          name="location"
          value={values.location.join(' ')}
          onClick={(e) => handleInputClick(e, optionData)}
          placeholder="찾고 싶은 위치를 선택해주세요"
          readOnly
        />
      </div>
      <div className="search-input-option-area">
        <ul className="search-input-option">
          {options &&
            options.map((el) => (
              <li onClick={() => handleOptionClick(el)}>{el}</li>
            ))}
        </ul>
      </div>
    </SearchInputsSection>
  );
};

export default SearchInputs;
