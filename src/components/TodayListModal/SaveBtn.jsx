import Button from 'components/Button/Button';
import { FormStyles, SaveBtnBox, SavedLabel } from './TodayListModal.styled';

export const SaveBtn = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  //   const saveEditWaterData = () => {};

  return (
    <FormStyles onSubmit={handleSubmit}>
      <SaveBtnBox>
        <SavedLabel>250 ml</SavedLabel>
        <Button
          type="submit"
          label={'Save'}
          //  onClick={saveEditWaterData}
          width="160px"
        />
      </SaveBtnBox>
    </FormStyles>
  );
};
