import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import Button from 'components/Button/Button';
import { addWater } from '../../redux/water/waterOperations';
import { updatePortionInfo } from '../../redux/water/waterSlice';
import { FormStyles, SaveBtnBox, SavedLabel } from './AddWaterModal.styled';
import toast from 'react-hot-toast';

export const SaveBtn = () => {
  const waterVolume = useSelector(selectAddWater);
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    const addWaterRate = Number(e.target.elements.amount.value);

    dispatch(addWater(addWaterRate))
      .unwrap()
      .then(() => {
        dispatch(updatePortionInfo(addWaterRate));
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
          readOnly
        />
        <Button type="submit" label={'Save'} width="160px" />
      </SaveBtnBox>
    </FormStyles>
  );
};
