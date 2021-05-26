import React, { ReactElement, useEffect, useState } from 'react';
import moment from 'moment';
import { Dates } from '@interfaces';
import { DatePicker, Dropdown, DropdownTrigger, OptionList } from '@components';
import { sampleSearchInputOptions } from '@utils/sample-data';
import {
  handleShowOption,
  handleChangeState,
  handleOptionList,
} from '@utils/dropdownUtils';

const MainSearchForm = (): ReactElement => {
  // option list
  const optionlistA = sampleSearchInputOptions.artist;
  const optionlistB = sampleSearchInputOptions.location;

  // 드롭다운을 보여줄 것인지 여부
  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);
  const [showC, setShowC] = useState<boolean>(false);

  // 입력 완료 여부
  const [isDoneA, setIsDoneA] = useState<boolean>(false);
  const [isDoneB, setIsDoneB] = useState<boolean>(false);
  // const [isDoneC, setIsDoneC] = useState<boolean>(false); // ! C는 datepicker이기 때문에 불필요. useEffect로 핸들링

  // 드롭다운의 내용을 구성할 옵션 리스트 관리
  const [listA, setListA] = useState<string[]>(Object.keys(optionlistA));
  const [listB, setListB] = useState<string[]>(Object.keys(optionlistB));

  // DropdownTrigger 에서 보여줄 문자열 관리
  const [stateA, setStateA] = useState<string | undefined>(undefined); // 아티스트
  const [stateB, setStateB] = useState<string | undefined>(undefined); // 위치
  const [dates, setDates] = useState<Dates>({ startDate: null, endDate: null }); // 날짜

  // 상태 관리 핸들러
  const handleChangeStateA = (selected: string) => {
    handleChangeState(selected, stateA, isDoneA, setStateA);
  };
  const handleChangeStateB = (selected: string) => {
    handleChangeState(selected, stateB, isDoneB, setStateB);
  };

  // 옵션 클릭 시 드롭다운의 내용을 바꾸거나 OR 닫아버리거나 OR 다음 드롭다운을 여는 옵션핸들러
  const handleOptionA = (key: string) => {
    handleOptionList(
      key,
      optionlistA,
      setListA,
      setShowA,
      setIsDoneA,
      setShowB,
      stateB
    );
  };
  const handleOptionB = (key: string) => {
    handleOptionList(
      key,
      optionlistB,
      setListB,
      setShowB,
      setIsDoneB,
      setShowC,
      dates.startDate,
      dates.endDate
    );
  };

  // 데이트피커 컨트롤
  const [focusedInput, setFocusedInput] =
    useState<'startDate' | 'endDate' | null>('startDate');

  const handleFocusInput = (focusedInput: 'startDate' | 'endDate' | null) => {
    focusedInput ? setFocusedInput(focusedInput) : setFocusedInput('startDate');
  };
  useEffect(() => {
    if (dates.endDate) setShowC(false);
  }, [dates.endDate]);

  return (
    <article>
      <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DropdownTrigger
          value={stateA}
          placeholder="아티스트 선택"
          onClick={(e) =>
            handleShowOption(e, showA, setShowA, setShowB, setShowC)
          }
        ></DropdownTrigger>
        <DropdownTrigger
          value={stateB}
          placeholder="위치 선택"
          onClick={(e) =>
            handleShowOption(e, showB, setShowB, setShowA, setShowC)
          }
        ></DropdownTrigger>
        <DropdownTrigger
          value={
            dates.startDate
              ? moment(dates.startDate).format('YYYY.MM.DD')
              : '날짜 입력'
          }
          placeholder="dd3"
          onClick={(e) =>
            handleShowOption(e, showC, setShowC, setShowB, setShowA)
          }
        ></DropdownTrigger>
        <DropdownTrigger
          value={
            dates.endDate
              ? moment(dates.endDate).format('YYYY.MM.DD')
              : '날짜 입력'
          }
          placeholder="dd3"
          onClick={(e) =>
            handleShowOption(e, showC, setShowC, setShowB, setShowA)
          }
        ></DropdownTrigger>
      </section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Dropdown visible={showA}>
          <OptionList
            list={listA}
            listHandler={handleOptionA}
            stateHandler={handleChangeStateA}
          />
        </Dropdown>
        <Dropdown visible={showB}>
          <OptionList
            list={listB}
            listHandler={handleOptionB}
            stateHandler={handleChangeStateB}
          />
        </Dropdown>
        <Dropdown visible={showC}>
          <DatePicker
            dates={dates}
            handleDateChange={setDates}
            focusedInput={focusedInput}
            handleFocusInput={handleFocusInput}
            numberOfMonths={2}
          />
        </Dropdown>
      </section>
    </article>
  );
};

export default MainSearchForm;
