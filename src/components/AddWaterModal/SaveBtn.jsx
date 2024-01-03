// import { useDispatch } from 'react-redux';
// import { useModal } from '../ModalContextProvider/ModalContextProvider';
import Button from 'components/Button/Button';
// import { updateWaterRate } from '../../redux/auth/operations';
// import { updateDailyNorma } from '../../redux/water/waterSlice';
import { FormStyles, SaveBtnBox, SavedLabel } from './AddWaterModal.styled';
// import toast from 'react-hot-toast';

export const SaveBtn = () => {
  // const dispatch = useDispatch();
  // const toggleModal = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    // const addWaterRate = e.target.elements.amount.value * 1000;
    // dispatch(updateWaterRate(addWaterRate))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(updateDailyNorma(addWaterRate));
    //     toast.success('Daily norma was successfully added');
    //     toggleModal();
    //   })
    //   .catch(error => {
    //     toast.error(error);
    //   });
  };

  // const savedWaterData = () => {};
  return (
    <FormStyles onSubmit={handleSubmit}>
      <SaveBtnBox>
        <SavedLabel>50 ml</SavedLabel>
        <Button
          type="submit"
          label={'Save'}
          // onClick={savedWaterData}
          width="160px"
          //   backgroundColor={ Blue}
          //   textColor={White }
        />
      </SaveBtnBox>
    </FormStyles>
  );
};
