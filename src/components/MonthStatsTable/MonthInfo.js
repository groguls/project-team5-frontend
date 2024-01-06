import { useSelector } from 'react-redux';
import { MonthInfoItem } from './MonthInfoItem';
import { selectMonthInfo } from '../../redux/selectors';
import { DaysList } from './MonthInfo.styled';

export const MonthInfoList = () => {
  const monthInfo = useSelector(selectMonthInfo);
  return (
    <DaysList>
      {monthInfo.map(day => (
        <MonthInfoItem day={day} key={day.date} />
      ))}
    </DaysList>
  );
};
