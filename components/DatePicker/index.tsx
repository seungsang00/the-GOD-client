import 'react-dates/initialize';
import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
moment.locale('ko'); // 한글화
import { DatePickerProps } from '@interfaces';
import { DatePickerStyle } from './DatePicker.style';

const DatePicker = ({
  dates,
  handleDateChange,
  focusedInput,
  handleFocusInput,
  numberOfMonths,
  onBlur,
}: DatePickerProps) => {
  return (
    <DatePickerStyle>
      <DayPickerRangeController
        onBlur={onBlur}
        startDate={dates.startDate} // momentPropTypes.momentObj or null,
        endDate={dates.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={handleDateChange} // PropTypes.func.isRequired, ({ startDate, endDate }) => this.setState({ startDate, endDate })
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={handleFocusInput} // PropTypes.func.isRequired,
        initialVisibleMonth={() => moment().add(0, 'M')} // PropTypes.func or null,
        numberOfMonths={numberOfMonths}
        minimumNights={0}
      />
    </DatePickerStyle>
  );
};

export default DatePicker;
