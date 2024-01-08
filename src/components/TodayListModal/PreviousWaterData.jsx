import { useSelector } from 'react-redux';
import { selectWaterList } from '../../redux/selectors';
import { GlassOfWater } from 'components/Icons/GlassOfWater';
import {
  PreviousDataBox,
  ValueWater,
  Time,
  GlassBox,
} from './TodayListModal.styled';

export const PreviousWaterData = ({ id, water, time }) => {
  const dailyWaterList = useSelector(selectWaterList);
  const waterData = dailyWaterList.find(item => item.id === id);

  return (
    <>
      <PreviousDataBox>
        <GlassBox>
          <GlassOfWater />
        </GlassBox>
        <ValueWater>
          {waterData?.water}
          ml
        </ValueWater>
        <Time>{waterData?.time}</Time>
      </PreviousDataBox>
    </>
  );
};
