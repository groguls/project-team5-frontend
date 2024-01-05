// import { useSelector } from 'react-redux';
// import { selectWaterList } from '../../redux/selectors';
import { TodayServingListItem } from './TodayServingsListItem';

const dailyWaterList = [
  {
    _id: '658eabae4f2cacdd1d946926',
    waterVolume: 150,
    time: '12:00',
  },
  {
    _id: '658eabae4f2cacdd1d946927',
    waterVolume: 150,
    time: '14:00',
  },
  {
    _id: '658eabae4f2cacdd1d946928',
    waterVolume: 200,
    time: '16:00',
  },
];

export const TodayServingsList = () => {
  //   const dailyWaterList = useSelector(selectWaterList);
  return (
    <ul>
      {dailyWaterList.map(today => (
        <TodayServingListItem todayList={today} key={today.id} />
      ))}
    </ul>
  );
};
