import React, { ChangeEvent, ReactElement } from 'react';
import { hours, minutes } from '@utils/time';
import { TimeSelectProps } from 'interfaces/props';
import { TimeSelectContainer } from './TimeSelect.style';

const TimeSelect = ({ setHour, setMinutes }: TimeSelectProps): ReactElement => {
  const handleHourSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setHour(target.value);
    console.log(target.value);
  };
  const handleMinutesSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setMinutes(target.value);
    console.log(target.value);
  };
  return (
    <TimeSelectContainer>
      <select name="hour" onChange={handleHourSelect}>
        {hours.map((HH: string) => (
          <option value={HH} key={`h${HH}`}>
            {HH}
          </option>
        ))}
      </select>
      <span>:</span>
      <select name="minutes" onChange={handleMinutesSelect}>
        {minutes.map((MM: string) => (
          <option value={MM} key={`h${MM}`}>
            {MM}
          </option>
        ))}
      </select>
    </TimeSelectContainer>
  );
};

export default TimeSelect;
