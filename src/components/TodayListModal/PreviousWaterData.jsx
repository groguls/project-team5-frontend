import { GlassOfWhater } from 'components/Icons/GlassOfWater';
import { PreviousDataBox, ValueWater } from './TodayListModal.styled';

export const PreviousWaterData = () => {
  const previousDate = '7:00';
  return (
    <>
      <PreviousDataBox>
        <GlassOfWhater />
        <ValueWater>250ml</ValueWater>
        <div>{previousDate}</div>
      </PreviousDataBox>
    </>
  );
};
