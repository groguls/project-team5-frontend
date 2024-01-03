// import { useSelector } from 'react-redux';
// import { selectMonthInfo } from '../../redux/selectors';
// import { DaysGeneralStats } from './DaysGeneralStats';
import { useSelector } from 'react-redux';
import { MonthInfoItem } from './MonthInfoItem';
import { selectMonthInfo } from '../../redux/selectors';
import { DaysList } from './MonthInfo.styled';

// const monthInfo = [
//   {
//     entries: 6,
//     date: '2023-12-01',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-02',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-03',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-04',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-05',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-06',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-07',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-08',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-09',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-10',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
// ];

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
