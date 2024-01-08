// import { useSelector } from 'react-redux';
// import { selectWaterList } from '../../redux/selectors';
import { GlassOfWater } from 'components/Icons/GlassOfWater';
import {
  PreviousDataBox,
  ValueWater,
  Time,
  GlassBox,
} from './TodayListModal.styled';

export const PreviousWaterData = ({ selectedRecord }) => {
  const { waterVolume, time } = selectedRecord;

  // const dailyWaterList = useSelector(selectWaterList);
  // const waterData = dailyWaterList.find(item => item.id === _id);

  return (
    <>
      <PreviousDataBox>
        <GlassBox>
          <GlassOfWater />
        </GlassBox>
        <ValueWater>
          {waterVolume}
          ml
        </ValueWater>
        <Time>{time}</Time>
      </PreviousDataBox>
    </>
  );
};
