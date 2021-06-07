import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { InputTagsSection } from './InputTags.style';

interface IInputTags {
  tagList?: string[];
  handler: (tags: string[]) => void;
}
const InputTags = ({ tagList, handler }: IInputTags): ReactElement => {
  const [value, setValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>(tagList as string[]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.keyCode === 13) {
      if (!tags.find((tag: any) => tag === target.value)) {
        setTags([...tags, target.value]);
      }
      setValue('');
    }
  };

  const handleDeleteTag = (key: string) => {
    const filteredTags = tags.filter((tag: string) => tag !== key);
    setTags(filteredTags);
  };
  useEffect(() => {
    if (tagList) setTags(tagList);
  }, [tagList]);

  useMemo(() => handler(tags), [tags]);
  return (
    <InputTagsSection>
      {tags &&
        tags.map((el) => (
          <span
            className="tag"
            key={el}
            onClick={() => handleDeleteTag(el)}
          >{`#${el}`}</span>
        ))}
      <input
        value={value}
        placeholder="태그를 입력해주세요"
        onChange={handleInputChange}
        onKeyDown={handleAddTag}
      />
    </InputTagsSection>
  );
};

export default InputTags;
