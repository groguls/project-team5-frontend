import { GlassOfWater } from 'components/Icons/GlassOfWater';
import {
  PreviousDataBox,
  ValueWater,
  Time,
  GlassBox,
} from './TodayListModal.styled';

export const PreviousWaterData = ({ selectedRecord }) => {
  const { waterVolume, date } = selectedRecord;

  const dateObject = new Date(date);
  const hour = dateObject.getHours().toString();
  const min = dateObject.getMinutes().toString().padStart(2, '0');

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
        <Time>
          {hour}:{min}
        </Time>
      </PreviousDataBox>
    </>
  );
};
