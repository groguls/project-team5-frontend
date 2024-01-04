import { GlassOfWater } from 'components/Icons/GlassOfWater';
import { PreviousDataBox, ValueWater, Time } from './TodayListModal.styled';

export const PreviousWaterData = () => {
  const previousDate = '7:00';
  return (
    <>
      <PreviousDataBox>
        <GlassOfWater />
        <ValueWater>250ml</ValueWater>
        <Time>{previousDate}</Time>
      </PreviousDataBox>
    </>
  );
};
