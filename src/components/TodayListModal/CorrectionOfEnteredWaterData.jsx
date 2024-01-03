import Typography from 'components/Typography/Typography';
// import { useState } from 'react';
import {
  AmountOfWater,
  RecordingTime,
  EnterValueWater,
  AddButton,
  EditWaterValue,
} from './TodayListModal.styled';

export const CorrectionOfEnteredWaterData = () => {
  // const [counter, setCounter] = useState('250');

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  const addWaterIncrement = () => {};
  return (
    <>
      <Typography styled="ListTitle">Correct entered data: </Typography>
      <Typography styled="Text">Amount of water: </Typography>
      <AmountOfWater>
        <AddButton onClick={addWaterIncrement} type="button">
          -
        </AddButton>
        <EditWaterValue placeholder="250 ml"></EditWaterValue>
        <AddButton type="button">+</AddButton>
      </AmountOfWater>
      <RecordingTime>
        Recording time:
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
        <input placeholder="250"></input>
      </EnterValueWater>
    </>
  );
};
