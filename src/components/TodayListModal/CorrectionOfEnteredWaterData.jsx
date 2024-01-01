import {
  AmountOfWater,
  RecordingTime,
  EnterValueWater,
} from './TodayListModal.styled';

export const CorrectionOfEnteredWaterData = () => {
  const time = Date.now();
  return (
    <>
      <AmountOfWater>
        <button type="button"></button>
        <input></input>
        <button type="button"></button>
      </AmountOfWater>
      <RecordingTime>
        RecordingTime: <input></input>
      </RecordingTime>
      <EnterValueWater>
        Enter the value of the whater used: <input></input>
      </EnterValueWater>
    </>
  );
};
