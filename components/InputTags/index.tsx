import React, { ReactElement, useState } from 'react';
import { InputTagsSection } from './InputTags.style';

interface IInputTags {
  tagList?: string[];
}
const InputTags = ({ tagList }: IInputTags): ReactElement => {
  const [value, setValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>(tagList as string[]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode);
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
