import { useState } from 'react';
import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import { Amounter, AddButton, AddWaterValue } from './AddWaterModal.styled';

export const AmountOfWater = () => {
  const [counter, setCounter] = useState(50);

  const addWaterDecrement = () => {
    setCounter(state => state - 50);
  };
  const addWaterIncrement = () => {
    setCounter(state => state + 50);
  };

  return (
    <>
      <Typography styled="ListTitle">Choose a value:</Typography>
      <Typography styled="Text">Amount of water:</Typography>
      <Amounter>
        <AddButton onClick={addWaterDecrement} type="button">
          <Minus />
        </AddButton>
        <AddWaterValue>
          {counter > 50 ? counter + 'ml' : 50 + 'ml'}
        </AddWaterValue>
        <AddButton onClick={addWaterIncrement} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
