import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import {
  BtnSave,
  CalculateInput,
  FormStyles,
  ValidationError,
} from './DailyNormaModal.styled';
import { updateWaterRate } from '../../redux/auth/operations';
import { updateDailyNorma } from '../../redux/water/waterSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const DailyNormaForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    const newWaterRate = e.target.elements.amount.value * 1000;
    dispatch(updateWaterRate(newWaterRate))
      .unwrap()
      .then(() => {
        dispatch(updateDailyNorma(newWaterRate));
        toast.success('Daily norma was successfully updated');
        toggleModal();
      })
      .catch(error => {
        toast.error(error);
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
          onInvalid={e => {
            e.preventDefault();
            !e.target.value
              ? setError('Fill in the field')
              : setError('The value must be greater than or equal to 1');
          }}
          onInput={() => setError(null)}
          onBlur={e => {
            !e.target.value
              ? setError('Fill in the field')
              : e.target.value < 1
              ? setError('The value must be greater than or equal to 1')
              : setError(null);
          }}
        />
        {error && <ValidationError>{error}</ValidationError>}
      </label>
      <BtnSave type="submit" onClick={() => setError(false)}>
        Save
      </BtnSave>
    </FormStyles>
  );
};
