export interface SearchInputProps {
  value: string[];
  placeholder: string[];
  options: any;
  openOptionDep?: 1 | 2;
  handleInputClick: SearchInputHandlers;
  handleOptionClick: (selected: string, depth: number) => void;
}

type SearchInputHandlers = {
  first: () => void;
  second: () => void;
};
