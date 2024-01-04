import { AmountOfWater } from './AmountOfWater';
import { AddWaterTime } from './AddWaterTime';
import { AddEnterValueWater } from './AddEnterValueWater';
import { SaveBtn } from './SaveBtn';

export const AddWaterModal = () => {
  return (
    <>
      <AmountOfWater />
      <AddWaterTime />
      <AddEnterValueWater />
      <SaveBtn />
    </>
  );
};
