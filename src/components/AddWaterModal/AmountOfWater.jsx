import Button from 'components/Button/Button';
import Typography from 'components/Typography/Typography';
import {
  Amounter,
  RecordingTime,
  EnterValueWater,
} from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const time = 'Date';
  return (
    <>
      <Amounter>
        <Button type="button"></Button>
        <p>0</p>
        <Button type="button"></Button>
      </Amounter>
      <RecordingTime>
        Recording time: <div>{time}</div>
      </RecordingTime>
      <EnterValueWater>
        <Typography styled="ListTitle">
          Enter the value of the whater used: <input></input>
        </Typography>
      </EnterValueWater>
    </>
  );
};
