import { TimeSelectBox } from 'components/TimeSelect/TimeSelect.style';
import React, {useEffect} from 'react';

const RangeForm = () => {
  useEffect(() => {
    const { startDate, endDate } = dates;
    const start =
      moment(startDate).format('YYYY-MM-DD') === 'Invalid date'
        ? '일정을 선택해주세요'
        : moment(startDate).format('YYYY-MM-DD');
    const end =
      moment(endDate).format('YYYY-MM-DD') === 'Invalid date'
        ? ''
        : moment(endDate).format('YYYY-MM-DD');

    setValues({
      ...values,
      dates: [start, end],
    });
  }, [dates]);
  <TimeSelect setHour={testHandler} setMinutes={testHandler} />
  <TimeSelect setHour={testHandler} setMinutes={testHandler} />
};

export default RangeForm;
