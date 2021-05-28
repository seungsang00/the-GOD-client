// datepicker type
import { FocusedInputShape } from 'react-dates';

export type Dates = {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
};
export interface DatePickerProps {
  dates: Dates;
  handleDateChange: React.Dispatch<React.SetStateAction<Dates>>;
  focusedInput: FocusedInputShape | null;
  handleFocusInput: (focusedInput: FocusedInputShape | null) => void;
  numberOfMonths: number;
}
