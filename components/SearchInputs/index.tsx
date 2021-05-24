import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Dates, SearchInputsValues } from 'interfaces/search';
import { SearchInputsSection } from './SearchInputs.style';
import { sampleSearchInputOptions as optionData } from '../../utils/sample-data';
import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';
import moment from 'moment';
moment.locale('ko'); // 한글화

const SearchInputs = (): ReactElement => {
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, [viewWidth]);

  const [values, setValues] = useState<SearchInputsValues>({
    artist: ['', ''],
    location: ['', ''],
    dates: ['', ''],
  });

  const [options, setOptions] = useState<string[] | undefined>(undefined);

  const currentField = useRef<string>('artist');
  const currentOptionDepth = useRef<number | undefined>(undefined);

  // datepicker
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [dates, setDates] = useState<Dates>({ startDate: null, endDate: null });
  const [focusedInput, setFocusedInput] =
    useState<'startDate' | 'endDate' | null>('startDate');

  const handleFocusInput = (focusedInput: 'startDate' | 'endDate' | null) => {
    focusedInput ? setFocusedInput(focusedInput) : setFocusedInput('startDate');
  };

  const handleInputClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => {
    const target = e.target as HTMLInputElement;
    currentField.current = target.name;
    if (currentField.current !== 'dates') {
      setOptions(Object.keys(optionData[target.name]));
      currentOptionDepth.current = 1;
    } else {
      console.log(`달력 나와라 오바`);
      // TODO: datepicker가 다루어져야 합니다
      setShowDatePicker(!showDatePicker);
    }
  };

  useEffect(() => {
    const { startDate, endDate } = dates;
    const start =
      moment(startDate).format('YYYY-MM-DD') === 'Invalid date'
        ? '일정을 선택해주세요'
        : moment(startDate).format('YYYY-MM-DD');
    const end =
      moment(endDate).format('YYYY-MM-DD') === 'Invalid date'
        ? '일정을 선택해주세요'
        : moment(endDate).format('YYYY-MM-DD');

    setValues({
      ...values,
      dates: [start, end],
    });
  }, [dates]);

  useEffect(() => {
    setShowDatePicker(!showDatePicker);
  }, [dates.endDate]);

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

  const initInputField = () => {
    if (currentField.current === 'artist') {
      // step1
      currentField.current = 'location';
      setOptions(Object.keys(optionData.location));
    } else if (currentField.current === 'location') {
      // step2
      currentField.current = 'dates';
      setOptions(undefined);
    }
    // common
    currentOptionDepth.current = 1;
  };

  const handleMobileOptionClick = (selected: string) => {
    if (currentOptionDepth.current === 1) {
      setValues({
        ...values,
        [currentField.current as string]: [selected, ''],
      });
      const secondOptionList = optionData[currentField.current][selected];
      if (options) {
        if (secondOptionList) {
          setOptions(secondOptionList);
          currentOptionDepth.current = 2;
        } else {
          initInputField();
        }
      }
    } else if (currentOptionDepth.current === 2) {
      setValues({
        ...values,
        [currentField.current as string]: [
          values[currentField.current as string][0],
          selected,
        ],
      });
      initInputField();
    }
  };

  return (
    <SearchInputsSection>
      {viewWidth && viewWidth > 425 ? (
        <DesktopSearchInput
          values={values}
          options={options}
          handleInputClick={handleInputClick}
          handleOptionClick={handleOptionClick}
          showDatePicker={showDatePicker}
          dates={dates}
          handleDateChange={setDates}
          focusedInput={focusedInput}
          handleFocusInput={handleFocusInput}
        />
      ) : (
        <MobileSearchInput
          values={values}
          currentField={currentField.current}
          options={options}
          handleInputClick={handleInputClick}
          handleOptionClick={handleMobileOptionClick}
          showDatePicker={showDatePicker}
          dates={dates}
          handleDateChange={setDates}
          focusedInput={focusedInput}
          handleFocusInput={handleFocusInput}
        />
      )}
    </SearchInputsSection>
  );
};

export default SearchInputs;
