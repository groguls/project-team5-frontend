// import Button from 'components/Button/Button';
import Typography from 'components/Typography/Typography';
import { useState } from 'react';
import {
  Amounter,
  RecordingTime,
  EnterValueWater,
  AddButton,
} from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const [counter, setCounter] = useState('50');

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  const addWaterIncrement = () => {};

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <AddButton onClick={addWaterIncrement} type="button">
          -
        </AddButton>
        <input placeholder="50 ml"></input>
        <AddButton type="button">+</AddButton>
      </Amounter>
      <RecordingTime>
        <Typography styled="Text">Recording time:</Typography>
        <select>
          <option>
            {hour}:{min}
          </option>
        </select>
      </RecordingTime>
      <Typography styled="ListTitle">
        Enter the value of the whater used:
      </Typography>
      <EnterValueWater>
        <input placeholder="50"></input>
      </EnterValueWater>
    </>
  );
};
