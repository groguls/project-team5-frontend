import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { updatePortionInfo } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input } from './AddWaterModal.styled';

export const AddEnterValueWater = () => {
  const [input, setInput] = useState('');
  const waterVolume = useSelector(selectAddWater);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b}+$]/.test(value)) {
      setInput(value);
    }
    dispatch(updatePortionInfo(value));
  };

  return (
    <EnterValueWater>
      <label>
        <Typography styled="ListTitle">
          Enter the value of the whater used:
        </Typography>
        <Input
          type="text"
          name="waterVolume"
          value={input || waterVolume}
          min={0}
          step={1}
          placeholder="0"
          onChange={handleChange}
        />
      </label>
    </EnterValueWater>
  );
};
