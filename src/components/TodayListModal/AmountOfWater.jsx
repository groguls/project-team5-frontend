import Typography from 'components/Typography/Typography';
// import { useState } from 'react';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  ListTitle,
  Text,
  AddButton,
  EditWaterValue,
} from './TodayListModal.styled';

export const AmountOfWater = () => {
  // const [counter, setCounter] = useState('250');
  const addWaterIncrement = () => {};
  return (
    <>
      <Typography styled="ListTitle">
        <ListTitle>Correct entered data:</ListTitle>
      </Typography>
      <Typography styled="Text">
        <Text>Amount of water:</Text>
      </Typography>
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
