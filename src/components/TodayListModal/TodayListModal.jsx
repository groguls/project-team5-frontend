import { PreviousWaterData } from './PreviousWaterData';
import { AmountOfWater } from './AmountOfWater';
import { SaveBtn } from './SaveBtn';
import { EditEnterValueWater } from './EditEnterValueWater';
import { EditWaterTime } from './EditWaterTime';

export const TodayListModal = () => {
  return (
    <>
      <PreviousWaterData />
      <AmountOfWater />
      <EditWaterTime />
      <EditEnterValueWater />
      <SaveBtn />
    </>
  );
};
