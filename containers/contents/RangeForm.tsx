import {
  Button,
  DatePicker,
  Dropdown,
  DropdownTrigger,
  TimeSelect,
} from '@components';
import { Dates } from '@interfaces';
import { nullChecker } from '@utils/contentUtils';
import { minutes } from '@utils/time';
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
  const dispatch = useDispatch();

  const timeController = (time: string) => {
    const times = time.split(':');
    const hour = times[0];
    const minute = times[1];
    return { hour, minute };
  };

  const { time, date } = useSelector(({ content }: RootState) => content.form);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState(false);
  const [dates, setDates] = useState<Dates>({
    startDate: date.start ? moment(date.start) : null,
    endDate: date.end ? moment(date.end) : null,
  });
  const [openTime, setOpenTime] = useState<{ hour: string; minute: string }>();
  const [closeTime, setCloseTime] =
    useState<{ hour: string; minute: string }>();

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
    setOpenTime(timeController(time.open));
    setCloseTime(timeController(time.close));
  }, [time]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    setDisabled(
      nullChecker({
        open: time.open,
        close: time.close,
        start: date.start,
        end: date.end,
      })
    );
  }, [time, date]);

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
    <>
      <section>
        <div>
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
        </div>
        <span className="dropdown">
          <Dropdown visible={isOpen}>
            <DatePicker
              dates={dates}
              handleDateChange={setDates}
              focusedInput={focusedInput}
              handleFocusInput={handleFocusInput}
              numberOfMonths={viewWidth && viewWidth <= 650 ? 1 : 2}
            />
          </Dropdown>
        </span>
      </section>
      <section className="time">
        <div>
          <h2>오픈</h2>
          <TimeSelect
            setHour={(hour: string) => {
              const timeArr = time.open.split(':');
              timeArr[0] = hour;
              dispatch(
                inputTimes({
                  close: time.close,
                  open: timeArr.join(':'),
                })
              );
            }}
            setMinutes={(minute: string) => {
              const timeArr = time.open.split(':');
              timeArr[1] = minute;
              dispatch(
                inputTimes({
                  close: time.close,
                  open: timeArr.join(':'),
                })
              );
            }}
            initTime={openTime}
          />
        </div>
        <div>
          <h2>마감</h2>
          <TimeSelect
            setHour={(hour: string) => {
              const timeArr = time.close.split(':');
              timeArr[0] = hour;
              console.log(time);
              dispatch(
                inputTimes({
                  open: time.open,
                  close: timeArr.join(':'),
                })
              );
            }}
            setMinutes={(minute: string) => {
              const timeArr = time.close.split(':');
              timeArr[1] = minute;
              dispatch(
                inputTimes({
                  open: time.open,
                  close: timeArr.join(':'),
                })
              );
            }}
            initTime={closeTime}
          />
        </div>
      </section>
      <section>
        <Button disabled={false} handler={onPrev} text="이전" />
        <Button disabled={disabled} handler={onSubmit} text="다음" />
      </section>
    </>
  );
};

export default RangeForm;
