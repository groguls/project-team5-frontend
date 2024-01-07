import { useSelector } from 'react-redux';
import { selectAddWater, selectTimeOfPortion } from '../../redux/selectors';
import { GlassOfWater } from 'components/Icons/GlassOfWater';
import { PreviousDataBox, ValueWater, Time } from './TodayListModal.styled';

export const PreviousWaterData = () => {
  const waterVolume = useSelector(selectAddWater);
  const date = useSelector(selectTimeOfPortion);

  return (
    <>
      <PreviousDataBox>
        <GlassOfWater />
        <ValueWater>{waterVolume}ml</ValueWater>
        <Time>{date}</Time>
      </PreviousDataBox>
    </>
  );
};
