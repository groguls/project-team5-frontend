import Typography from 'components/Typography/Typography';
import { AmountOfWater } from './AmountOfWater';
import Button from 'components/Button/Button';
import { SaveBtnBox } from './AddWaterModal.styled';

export const AddWaterModal = () => {
  const savedWaterData = () => {};

  return (
    <>
      <Typography styled="MainTitle">Add water</Typography>
      <Typography styled="Subtitle">Amount of water:</Typography>
      <AmountOfWater />
      <SaveBtnBox>
        <p>50 ml</p>
        <Button
          label={'Save'}
          onClick={savedWaterData}
          //    width={160px}
          //   backgroundColor={ Blue}
          //   textColor={White }
        />
      </SaveBtnBox>
    </>
  );
};
