import { useDispatch, useSelector } from 'react-redux';
import { selectAddWater } from '../../redux/selectors';
import { decrement, increment } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import { Amounter, AddButton, AddWaterValue } from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const amount = useSelector(selectAddWater);
  const dispatch = useDispatch();

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <AddButton onClick={() => dispatch(decrement(50))} type="button">
          <Minus />
        </AddButton>
        <AddWaterValue>{amount >= 50 ? amount + 'ml' : 0}</AddWaterValue>
        <AddButton onClick={() => dispatch(increment(50))} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
