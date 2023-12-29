import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { BtnSave, CalculateInput, FormStyles } from './DailyNormaModal.styled';
import { updateWaterRate } from '../../redux/auth/operations';
import { updateDailyNorma } from '../../redux/water/waterSlice';

export const DailyNormaForm = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    const newWaterRate = e.target.elements.amount.value * 1000;
    dispatch(updateWaterRate(newWaterRate))
      .unwrap()
      .then(() => {
        dispatch(updateDailyNorma(newWaterRate));
        console.log('Daily norma was successfully updated');
        toggleModal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label>
        Write down how much water you will drink(in liters):
        <CalculateInput
          type="number"
          name="amount"
          min={1}
          max={15}
          step={0.1}
          required
        />
      </label>
      <BtnSave type="submit">Save</BtnSave>
    </FormStyles>
  );
};
