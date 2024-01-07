import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  AddButton,
  EditWaterValue,
  Article,
} from './TodayListModal.styled';

export const AmountOfWater = ({ water, setWater }) => {
  const handleDecrement = () => {
    if (water > 50) {
      setWater(water - 50);
    }
  };

  const handleIncrement = () => {
    if (water <= 5000) {
      setWater(water + 50);
    }
  };

  return (
    <>
      <Article>
        <Typography styled="ListTitle">Correct entered data:</Typography>
      </Article>
      <Article>
        <Typography styled="Text">Amount of water:</Typography>
      </Article>
      <Amounter>
        <AddButton onClick={handleDecrement} type="button">
          <Minus />
        </AddButton>
        <EditWaterValue>{water}ml</EditWaterValue>
        <AddButton onClick={handleIncrement} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
