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

export interface DesktopSearchInputProps {
  values: SearchInputsValues;
  options: any;
  handleInputClick: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    optionData: any
  ) => void;
  handleOptionClick: (selected: string) => void;
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
}

export interface IPlaceholders {
  artist: string;
  location: string;
  [props: string]: any;
}
