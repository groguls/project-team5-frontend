import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { addWater, getTodayInfo } from '../../redux/water/waterOperations';
import { AmountOfWater } from './AmountOfWater';
import { AddWaterTime } from './AddWaterTime';
import { AddEnterValueWater } from './AddEnterValueWater';
import Button from 'components/Button/Button';
import {
  FormStyles,
  SaveBtnBox,
  SavedLabel,
  LabelBox,
  BtnBox,
} from './AddWaterModal.styled';
import toast from 'react-hot-toast';

export const AddWaterModal = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const [waterVolume, setWaterVolume] = useState(50);
  const [date, setDate] = useState('');
  const newRecord = { waterVolume: waterVolume, date: date };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addWater(newRecord));
    dispatch(getTodayInfo());

    toast.success('Water was successfully added');
    toggleModal();
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <AmountOfWater water={waterVolume} setWater={setWaterVolume} />
      <AddWaterTime dateValue={date} setDateValue={setDate} />
      <AddEnterValueWater water={waterVolume} setWater={setWaterVolume} />
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
