// import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import Button from 'components/Button/Button';
// import { addWater } from '../../redux/water/waterOperations';
// import { updateDayInfo } from '../../redux/water/waterSlice';
import { FormStyles, SaveBtnBox, SavedLabel } from './AddWaterModal.styled';
// import toast from 'react-hot-toast';

export const SaveBtn = () => {
  // const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    // const addWaterRate = e.target.elements.amount.value;
    // console.log('handleSubmit  addWaterRate:', addWaterRate);
    // dispatch(addWater(addWaterRate))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(updateDayInfo(addWaterRate));
    //     toast.success('Water was successfully added');
    toggleModal();
    // })
    // .catch(error => {
    //   toast.error(error);
    // });
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <SaveBtnBox>
        <label>
          <SavedLabel type="number" name="amount" min={0} />
        </label>
        <Button type="submit" label={'Save'} width="160px" />
      </SaveBtnBox>
    </FormStyles>
  );
};
