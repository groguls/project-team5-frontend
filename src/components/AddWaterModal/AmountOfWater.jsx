import { useReducer } from 'react';
import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  AddButton,
  AddWaterValue,
  ListTitle,
  Text,
} from './AddWaterModal.styled';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    default:
      return state;
  }
}

export const AmountOfWater = () => {
  const [state, dispatch] = useReducer(countReducer, 50);
  // const dispatch = useDispatch();

  return (
    <>
      <ListTitle>
        <Typography styled="ListTitle">Choose a value:</Typography>
      </ListTitle>
      <Text>
        <Typography styled="Text">Amount of water:</Typography>
      </Text>
      <Amounter>
        <AddButton
          onClick={() => dispatch({ type: 'decrement', payload: 50 })}
          type="button"
        >
          <Minus />
        </AddButton>
        <AddWaterValue>{state > 50 ? state + 'ml' : 50 + 'ml'}</AddWaterValue>
        <AddButton
          onClick={() => dispatch({ type: 'increment', payload: 50 })}
          type="button"
        >
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
