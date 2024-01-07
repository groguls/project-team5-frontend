// import { useSelector } from 'react-redux';
// import { selectWaterList } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { TodayList } from './TodayServingsList.styled';
import { TodayServingListItem } from './TodayServingsListItem';
import { selectWaterList, selectWaterNote } from '../../redux/selectors';

export const TodayServingsList = () => {
  const dailyWaterList = useSelector(selectWaterList);
  const waterNote = useSelector(selectWaterNote);
  console.log('TodayServingsList  waterNote:', waterNote);

  return (
    <TodayList>
      {dailyWaterList.map(today => (
        <TodayServingListItem todayList={waterNote} key={today._id} />
      ))}
    </TodayList>
  );
};
