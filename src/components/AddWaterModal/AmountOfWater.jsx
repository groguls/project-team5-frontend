import Button from 'components/Button/Button';
import Typography from 'components/Typography/Typography';
import {
  Amounter,
  RecordingTime,
  EnterValueWater,
} from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  console.log(hour, min);

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <Button type="button"></Button>
        <p>0</p>
        <Button type="button"></Button>
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
        <input></input>
      </EnterValueWater>
    </>
  );
};
