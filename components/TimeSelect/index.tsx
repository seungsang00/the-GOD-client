import React, { MouseEvent, ReactElement, useMemo, useState } from 'react';
import { hours, minutes } from '@utils/time';
import { TimeSelectProps } from 'interfaces/props';
import { TimeSelectBox } from './TimeSelect.style';

const TimeSelect = ({
  setHour,
  setMinutes,
  initTime,
}: TimeSelectProps): ReactElement => {
  const [time, setTime] = useState<string[]>(
    initTime ? [initTime.hour, initTime.minute] : ['-- 시 --', '-- 분 --']
  );
  const [openOption, setOpenOption] = useState<boolean[]>([false, false]);
  const [isOptionOpenH, isOptionOpenM] = openOption;

  const handleSelectHour = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    const newTime = [...time];
    newTime[0] = target.textContent as string;
    setTime(newTime);
    setHour(newTime[0]);
    setOpenOption([false, false]);
  };

  const handleSelectMinutes = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    const newTime = [...time];
    newTime[1] = target.textContent as string;
    setTime(newTime);
    setMinutes(newTime[1]);
    setOpenOption([false, false]);
  };

  useMemo(() => {
    initTime && setTime([initTime.hour, initTime.minute]);
  }, [initTime]);
  return (
    <TimeSelectBox
      hour={time[0]}
      minute={time[1]}
      isOptionOpenM={isOptionOpenM}
      isOptionOpenH={isOptionOpenH}
    >
      <article className="selectbox-hour">
        <div
          className="selectbox-display"
          onClick={() => setOpenOption([!isOptionOpenH, false])}
        >
          {time[0]}
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
      <span className="time-connector">:</span>
      <article className="selectbox-minutes">
        <div
          className="selectbox-display"
          onClick={() => setOpenOption([false, !isOptionOpenM])}
        >
          {time[1]}
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
