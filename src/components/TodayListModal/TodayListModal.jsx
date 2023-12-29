import Typography from 'components/Typography/Typography';
import { PreviousWaterData } from './PreviousWaterData';
import { CorrectionOfEnteredWaterData } from './CorrectionOfEnteredWaterData';
import Button from 'components/Button/Button';
import { SaveBtnBox } from './TodayListModal.styled';

export const TodayListModal = () => {
  const saveEditWaterData = () => {};

  return (
    <>
      <Typography styled="subtitle">
        Edit the entered amount of water
      </Typography>
      <PreviousWaterData />
      <CorrectionOfEnteredWaterData />
      <SaveBtnBox>
        <p>250 ml</p>
        <Button
          label={'Save'}
          onClick={saveEditWaterData}
          //    width={160px}
          //   backgroundColor={ Blue}
          //   textColor={White }
        />
      </SaveBtnBox>
    </>
  );
};
