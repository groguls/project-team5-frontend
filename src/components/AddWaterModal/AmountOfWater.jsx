import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { decrement, increment } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import { Amounter, AddButton, AddWaterValue } from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const waterVolume = useSelector(selectAddWater);
  const dispatch = useDispatch();

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <AddButton onClick={() => dispatch(decrement(50))} type="button">
          <Minus />
        </AddButton>
        <AddWaterValue>{waterVolume >= 50 ? waterVolume : 0} ml</AddWaterValue>
        <AddButton onClick={() => dispatch(increment(50))} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
