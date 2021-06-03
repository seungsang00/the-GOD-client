import { OptionListStyle } from './OptionList.style';
import { MouseEvent } from 'react';
import { Artists, IArtist, IGroupArtist, IMember } from '@interfaces';

const OptionList = ({
  list,
  listHandler,
  stateHandler,
}: {
  list: Artists | null | string[] | IMember[]; //string[] | IArtist[] | IGroupArtist[] ;
  listHandler: (key: string, id?: string) => void;
  stateHandler: (selected: string, id?: string) => void;
}) => {
  const handler = (
    _e: MouseEvent,
    el: string | IArtist | IGroupArtist | IMember
  ) => {
    // ? artist : location
    if (typeof el !== 'string') {
      // 아티스트
      // TODO: 새로운 핸들러 추가
      listHandler(el.name, el.id);
      stateHandler(el.name, el.id);
    } else {
      // location
      listHandler(el);
      stateHandler(el);
    }
  };
  return (
    <OptionListStyle>
      {list &&
        list.map((el: string | IArtist | IGroupArtist | IMember) => {
          const value = typeof el === 'string' ? el : el.name;
          return (
            <li
              className="option-item"
              key={`option_${value}`}
              onClick={(e) => handler(e, el)}
            >
              {value}
            </li>
          );
        })}
    </OptionListStyle>
  );
};

export default OptionList;
