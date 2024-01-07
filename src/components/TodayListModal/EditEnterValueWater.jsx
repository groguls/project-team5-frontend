// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { updatePortionInfo } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input, Article } from './TodayListModal.styled';

export const EditEnterValueWater = () => {
  // const [input, setInput] = useState('');
  const waterVolume = useSelector(selectAddWater);
  const dispatch = useDispatch();

  // console.log(input);

  const handleChange = e => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b}+$]/.test(value)) {
      dispatch(updatePortionInfo(Number(value)));
    }
  };

  return (
    <EnterValueWater>
      <label>
        <Article>
          <Typography styled="ListTitle">
            Enter the value of the whater used:
          </Typography>
        </Article>
        <Input
          type="number"
          name="waterVolume"
          value={waterVolume}
          max={5000}
          min={1}
          step={1}
          placeholder="0"
          onChange={handleChange}
        />
      </label>
    </EnterValueWater>
  );
};
