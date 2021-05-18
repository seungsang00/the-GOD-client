import { SearchInputProps } from 'interfaces/search';
import React, { ReactElement } from 'react';
import { InputArea, OptionArea } from './SearchInput.style';

const SearchInput = ({
  value,
  placeholder,
  options,
  openOptionDep,
  handleInputClick,
  handleOptionClick,
}: SearchInputProps): ReactElement => {
  const [firstValue, secondValue] = value;

  return (
    <section>
      <InputArea className="search-input-area">
        <input
          className="input-first-depth"
          name="first"
          value={firstValue}
          placeholder={placeholder[0]}
          onClick={handleInputClick.first}
          readOnly // ! disabled면 아예 클릭도 안먹힘. DOM 자체에서 인식을 안해버림.
        />
        {secondValue && (
          <input
            className="input-second-depth"
            name="second"
            value={secondValue}
            placeholder={placeholder[1]}
            onClick={handleInputClick.second}
            readOnly
          />
        )}
      </InputArea>
      <OptionArea className="input-options-area">
        {openOptionDep === 1 && (
          <ul className="options-first-depth">
            {options &&
              Object.keys(options).map((first: string, idx: number) => (
                <li
                  className="option"
                  id={`firstOption${idx}`}
                  key={`firstOption${idx}`}
                  onClick={() => handleOptionClick(first, 1)}
                >
                  {first}
                </li>
              ))}
          </ul>
        )}
        {openOptionDep === 2 && (
          <ul className="options-second-depth">
            {value &&
              options[firstValue] &&
              options[firstValue].map((second: string, idx: number) => (
                <li
                  className="option"
                  id={`secondOption${idx}`}
                  key={`secondOption${idx}`}
                  onClick={() => handleOptionClick(second, 2)}
                >
                  {second}
                </li>
              ))}
          </ul>
        )}
      </OptionArea>
    </section>
  );
};

export default SearchInput;
