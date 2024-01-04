import { PreviousWaterData } from './PreviousWaterData';
import { AmountOfWater } from './AmountOfWater';
import { SaveBtn } from './SaveBtn';
import { EditEnterValueWater } from './EditEnterValueWater';

export const TodayListModal = () => {
  return (
    <>
      <PreviousWaterData />
      <AmountOfWater />
      <EditEnterValueWater />
      <SaveBtn />
    </>
  );
};
