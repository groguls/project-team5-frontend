import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { editWater } from '../../redux/water/waterOperations';
import { PreviousWaterData } from './PreviousWaterData';
import { AmountOfWater } from './AmountOfWater';
import { EditEnterValueWater } from './EditEnterValueWater';
import { EditWaterTime } from './EditWaterTime';
import Button from 'components/Button/Button';
import {
  FormStyles,
  SaveBtnBox,
  SavedLabel,
  LabelBox,
  BtnBox,
} from './TodayListModal.styled';
import toast from 'react-hot-toast';

export const TodayListModal = ({ selectedRecord }) => {
  const id = selectedRecord._id;
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const [waterVolume, setWaterVolume] = useState(250);
  const [date, setDate] = useState('');
  const newWater = { waterVolume, date, id };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(editWater({ newWater }))
      .unwrap()
      .then(() => {

        toast.success('Water was successfully updated');

        toggleModal();
      })
      .catch(error => {
        toast.error(error);
      });
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <PreviousWaterData selectedRecord={selectedRecord} />
      <AmountOfWater water={waterVolume} setWater={setWaterVolume} />
      <EditWaterTime dateValue={date} setDateValue={setDate} />
      <EditEnterValueWater water={waterVolume} setWater={setWaterVolume} />
      <SaveBtnBox>
        <LabelBox>
          <SavedLabel>{waterVolume}ml</SavedLabel>
        </LabelBox>
        <BtnBox>
          <Button type="submit" label={'Save'} width="160px" />
        </BtnBox>
      </SaveBtnBox>
    </FormStyles>
  );
};
