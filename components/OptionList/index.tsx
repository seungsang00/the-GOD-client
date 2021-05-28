import { OptionListStyle } from './OptionList.style';
import { MouseEvent } from 'react';

const OptionList = ({
  list,
  listHandler,
  stateHandler,
}: {
  list: string[];
  listHandler: (key: string) => void;
  stateHandler: (selected: string) => void;
}) => {
  const handler = (e: MouseEvent, el: string) => {
    listHandler(el);
    stateHandler(el);
    console.log(e.target, el);
  };
  return (
    <OptionListStyle>
      {list.map((el) => (
        <li
          className="option-item"
          key={`option_${el}`}
          onClick={(e) => handler(e, el)}
        >
          {el}
        </li>
      ))}
    </OptionListStyle>
  );
};

export default OptionList;
