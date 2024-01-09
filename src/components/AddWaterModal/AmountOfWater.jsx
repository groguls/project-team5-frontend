import Typography from 'components/Typography/Typography';
import { Plus } from 'components/Icons/Plus/Plus';
import { Minus } from 'components/Icons/Minus';
import {
  Amounter,
  AddButton,
  AddWaterValue,
  Article,
} from './AddWaterModal.styled';

export const AmountOfWater = ({ water, setWater }) => {
  const handleDecrement = () => {
    setWater(prevWater => {
      const decrementedValue = Math.max(
        0,
        Math.floor((prevWater - 1) / 50) * 50
      );
      return decrementedValue;
    });
  };

  const handleIncrement = () => {
    setWater(prevWater => {
      const incrementedValue = Math.min(
        5000,
        Math.ceil((prevWater + 1) / 50) * 50
      );
      return incrementedValue;
    });
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
        <AddWaterValue>{water}ml</AddWaterValue>
        <AddButton onClick={handleIncrement} type="button">
          <Plus />
        </AddButton>
      </Amounter>
    </>
  );
};
