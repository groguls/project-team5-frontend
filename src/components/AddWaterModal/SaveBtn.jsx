import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater, selectTimeOfPortion } from '../../redux/selectors';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import Button from 'components/Button/Button';
import { addWater } from '../../redux/water/waterOperations';
import {
  updatePortionInfo,
  updateTimeInfo,
} from '../../redux/water/waterSlice';
import { FormStyles, SaveBtnBox, SavedLabel } from './AddWaterModal.styled';
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
        <SavedLabel
          type="number"
          name="amount"
          max={5000}
          min={1}
          value={waterVolume}
          placeholder="0"
          readOnly
        />
        <div style={{ margin: '0px' }}>
          <Button type="submit" label={'Save'} width="160px" />
        </div>
      </SaveBtnBox>
    </FormStyles>
  );
};
