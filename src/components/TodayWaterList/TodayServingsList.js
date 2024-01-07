import { useSelector } from 'react-redux';
import { TodayList } from './TodayServingsList.styled';
import { TodayServingListItem } from './TodayServingsListItem';
import { selectWaterList } from '../../redux/selectors';

export const TodayServingsList = () => {
  const dailyWaterList = useSelector(selectWaterList);

  return (
    <TodayList>
      {dailyWaterList.map(today => (
        <TodayServingListItem todayList={today} key={today._id} />
      ))}
    </TodayList>
  );
};
