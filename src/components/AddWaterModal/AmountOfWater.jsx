import Button from 'components/Button/Button';
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
        RecordingTime: <div>{time}</div>
      </RecordingTime>
      <EnterValueWater>
        Enter the value of the whater used: <input></input>
      </EnterValueWater>
    </>
  );
};
