import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater, selectTimeOfPortion } from '../../redux/selectors';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { addWater } from '../../redux/water/waterOperations';
import {
  updatePortionInfo,
  updateTimeInfo,
} from '../../redux/water/waterSlice';
import Button from 'components/Button/Button';
import {
  FormStyles,
  SaveBtnBox,
  SavedLabel,
  LabelBox,
  BtnBox,
} from './AddWaterModal.styled';
import toast from 'react-hot-toast';

export const SaveBtn = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const waterVolume = useSelector(selectAddWater);
  const date = useSelector(selectTimeOfPortion);

  const handleSubmit = e => {
    e.preventDefault();
    // const addWaterRate = Number(e.target.elements.amount.value);

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
      <SaveBtnBox>
        <LabelBox>
          <SavedLabel
            type="number"
            name="amount"
            max={5000}
            min={1}
            value={waterVolume}
            placeholder="0"
            readOnly
          />
          <span>ml</span>
        </LabelBox>
        <BtnBox>
          <Button type="submit" label={'Save'} width="160px" />
        </BtnBox>
      </SaveBtnBox>
    </FormStyles>
  );
};
