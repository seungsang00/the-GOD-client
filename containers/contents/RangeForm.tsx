import {
  DatePicker,
  Dropdown,
  DropdownTrigger,
  TextButton,
  TimeSelect,
} from '@components';
import { Dates } from '@interfaces';
import { inputDates, inputTimes } from 'modules/content';
import { RootState } from 'modules/reducer';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RangeForm = ({
  onPrev,
  onSubmit,
}: {
  onPrev: () => void;
  onSubmit: () => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dates, setDates] = useState<Dates>({ startDate: null, endDate: null });
  const dispatch = useDispatch();
  const { time } = useSelector(({ content }: RootState) => content.form);
  const [focusedInput, setFocusedInput] =
    useState<'startDate' | 'endDate' | null>('startDate');
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);

  const handleFocusInput = (focusedInput: 'startDate' | 'endDate' | null) => {
    focusedInput ? setFocusedInput(focusedInput) : setFocusedInput('startDate');
  };
  // display vw check
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
    dispatch(inputDates({ start: dates.startDate, end: dates.endDate }));
  }, [dates]);

  useMemo(() => {
    setIsOpen(false);
  }, [dates.endDate]);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, [viewWidth]);
  return (
    <div>
      <section>
        <DropdownTrigger
          value={
            dates.startDate
              ? moment(dates.startDate).format('YYYY.MM.DD')
              : '날짜 입력'
          }
          placeholder="dd3"
          onClick={() => setIsOpen((state) => !state)}
        />
        <DropdownTrigger
          value={
            dates.endDate
              ? moment(dates.endDate).format('YYYY.MM.DD')
              : '날짜 입력'
          }
          placeholder="dd3"
          onClick={() => setIsOpen((state) => !state)}
        />
      </section>
      <section>
        <Dropdown visible={isOpen}>
          <DatePicker
            dates={dates}
            handleDateChange={setDates}
            focusedInput={focusedInput}
            handleFocusInput={handleFocusInput}
            numberOfMonths={viewWidth && viewWidth <= 650 ? 1 : 2}
          />
        </Dropdown>
      </section>
      <TimeSelect
        setHour={(hour: string) =>
          inputTimes({
            close: time.close,
            open: time.open.replace('HH', hour),
          })
        }
        setMinutes={(minute: string) =>
          inputTimes({
            close: time.close,
            open: time.open.replace('MM', minute),
          })
        }
      />
      <TimeSelect
        setHour={(hour: string) =>
          dispatch(
            inputTimes({
              open: time.open,
              close: time.close.replace('HH', hour),
            })
          )
        }
        setMinutes={(minute: string) =>
          dispatch(
            inputTimes({
              open: time.open,
              close: time.close.replace('MM', minute),
            })
          )
        }
      />
      <TextButton disabled={false} handler={onPrev} text="이전" />
      <TextButton disabled={false} handler={onSubmit} text="다음" />
    </div>
  );
};

export default RangeForm;
