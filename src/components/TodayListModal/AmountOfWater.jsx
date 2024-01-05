import Typography from 'components/Typography/Typography';
// import { useState } from 'react';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import { Amounter, AddButton, EditWaterValue } from './TodayListModal.styled';

export const AmountOfWater = () => {
  // const [counter, setCounter] = useState('250');
  const addWaterIncrement = () => {};
  return (
    <>
      <Typography styled="ListTitle">Correct entered data:</Typography>

      <Typography styled="Text">Amount of water:</Typography>

      <Amounter>
        <AddButton onClick={addWaterIncrement} type="button">
          <Minus />
        </AddButton>
        <EditWaterValue placeholder="250 ml"></EditWaterValue>
        <AddButton type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
