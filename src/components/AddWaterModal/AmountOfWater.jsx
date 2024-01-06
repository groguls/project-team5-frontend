import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { decrement, increment } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  AddButton,
  AddWaterValue,
  Article,
} from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const waterVolume = useSelector(selectAddWater);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (waterVolume > 50) {
      dispatch(decrement(50));
    }
  };

  const handleIncrement = () => {
    dispatch(increment(50));
  };

  return (
    <>
      <Article>
        <Typography styled="ListTitle">Choose a value:</Typography>
      </Article>
      <Article>
        <Typography styled="Text">Amount of water:</Typography>
      </Article>
      <Amounter>
        <AddButton onClick={handleDecrement} type="button">
          <Minus />
        </AddButton>
        <AddWaterValue>{waterVolume} ml</AddWaterValue>
        <AddButton onClick={handleIncrement} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
