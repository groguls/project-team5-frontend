import { GlassOfWhater } from 'components/Icons/GlassOfWater';
import { PreviousDataBox } from './TodayListModal.styled';

export const PreviousWaterData = () => {
  const previousDate = '7:00';
  return (
    <PreviousDataBox>
      <GlassOfWhater />
      <div>250ml</div>
      <div>{previousDate}</div>
    </PreviousDataBox>
  );
};
