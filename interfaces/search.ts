import { FocusedInputShape } from 'react-dates';
export interface SearchInputsValues {
  artist: string[];
  location: string[];
  [props: string]: any;
}

export interface SearchInputsOpenedOption {
  artist?: 1 | 2;
  location?: 1 | 2;
}
export interface SearchInputProps {
  field: string;
  value: string[];
  placeholder: string[];
  options: any;
  openOptionDep?: 1 | 2;
  handleInputClick: SearchInputHandlers;
  handleOptionClick: (selected: string, field: string, depth: number) => void;
}

type SearchInputHandlers = {
  first: (field: string) => void;
  second: (field: string) => void;
};

export interface SearchInputBarProps {
  values: SearchInputsValues;
  handleInputClick: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => void;
}

export interface DesktopSearchInputProps {
  values: SearchInputsValues;
  options: any;
  handleInputClick: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => void;
  handleOptionClick: (selected: string) => void;
  showDatePicker: boolean;
  dates: Dates;
  handleDateChange: React.Dispatch<React.SetStateAction<Dates>>;
  focusedInput: FocusedInputShape | null;
  handleFocusInput: (focusedInput: FocusedInputShape | null) => void;
}

export interface MobileSearchInputProps {
  values: SearchInputsValues;
  value?: string[];
  currentField: string;
  options: any;
  handleInputClick: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => void;
  handleOptionClick: (selected: string) => void;
  showDatePicker: boolean;
  dates: Dates;
  handleDateChange: React.Dispatch<React.SetStateAction<Dates>>;
  focusedInput: FocusedInputShape | null;
  handleFocusInput: (focusedInput: FocusedInputShape | null) => void;
}

export interface IPlaceholders {
  artist: string;
  location: string;
  [props: string]: any;
}

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
