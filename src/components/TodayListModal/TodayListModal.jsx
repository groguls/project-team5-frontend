import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { addWater } from '../../redux/water/waterOperations';
import {
  updatePortionInfo,
  updateTimeInfo,
} from '../../redux/water/waterSlice';
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
} from './AddWaterModal.styled';
import toast from 'react-hot-toast';

export const TodayListModal = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const [waterVolume, setWaterVolume] = useState(50);
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addWater({ waterVolume, date }))
      .unwrap()
      .then(() => {
        dispatch(updatePortionInfo(waterVolume));
        dispatch(updateTimeInfo(date));
        toast.success('Water was successfully added');
        toggleModal();
      })
      .catch(error => {
        toast.error(error);
      });
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <PreviousWaterData />
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
