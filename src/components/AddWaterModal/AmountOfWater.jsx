// import Button from 'components/Button/Button';
import Typography from 'components/Typography/Typography';
// import { useState } from 'react';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  RecordingTime,
  EnterValueWater,
  AddButton,
  AddWaterValue,
  Input,
} from './AddWaterModal.styled';

export const AmountOfWater = () => {
  // const [counter, setCounter] = useState('50');

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  const addWaterIncrement = () => {};
  const addWaterDecrement = () => {};

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <AddButton onClick={addWaterDecrement} type="button">
          <Minus />
        </AddButton>
        <AddWaterValue placeholder="50 ml"></AddWaterValue>
        <AddButton onClick={addWaterIncrement} type="button">
          <Plus />
        </AddButton>
      </Amounter>
      <RecordingTime>
        <Typography styled="Text">Recording time:</Typography>
        <select>
          <option>
            {hour}:{min}
          </option>
        </select>
      </RecordingTime>

      <EnterValueWater>
        <label>
          <Typography styled="ListTitle">
            Enter the value of the whater used:
          </Typography>
          <Input
            type="number"
            name="weight"
            // max={200}
            // min={0}
            placeholder="50"
            // onChange={handleInputChange}
          />
        </label>
      </EnterValueWater>
    </>
  );
};
