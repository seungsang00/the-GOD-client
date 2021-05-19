import React, { MouseEvent, ReactElement, useState } from 'react';
import { hours, minutes } from '@utils/time';
import { TimeSelectProps } from 'interfaces/props';
import { TimeSelectBox } from './TimeSelect.style';

const TimeSelect = ({ setHour, setMinutes }: TimeSelectProps): ReactElement => {
  const [time, setTime] = useState<string[]>([' --시-- ', ' --분-- ']);
  const [openOption, setOpenOption] = useState<boolean[]>([false, false]);
  const [hour, minute] = time;
  const [isOptionOpenH, isOptionOpenM] = openOption;

  const handleSelectHour = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    const newTime = [...time];
    newTime[0] = target.textContent as string;
    setTime(newTime);
    setHour(time[0]);
    setOpenOption([false, false]);
    console.log(target.textContent as string);
  };

  const handleSelectMinutes = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    const newTime = [...time];
    newTime[1] = target.textContent as string;
    setTime(newTime);
    setMinutes(time[1]);
    setOpenOption([false, false]);
    console.log(target.textContent as string);
  };

  return (
    <TimeSelectBox>
      <article className="selectbox-hour">
        <div
          className="selectbox-display"
          onClick={() => setOpenOption([true, false])}
        >
          {hour}
        </div>
        {isOptionOpenH && (
          <ul className="option-container">
            {hours.map((HH: string) => (
              <li key={`h${HH}`} onClick={handleSelectHour}>
                {HH}
              </li>
            ))}
          </ul>
        )}
      </article>
      <span>:</span>
      <article className="selectbox-minutes">
        <div
          className="selectbox-display"
          onClick={() => setOpenOption([false, true])}
        >
          {minute}
        </div>
        {isOptionOpenM && (
          <ul className="option-container">
            {minutes.map((MM: string) => (
              <li
                className="option"
                key={`m${MM}`}
                onClick={handleSelectMinutes}
              >
                {MM}
              </li>
            ))}
          </ul>
        )}
      </article>
    </TimeSelectBox>
  );
};

export default TimeSelect;
