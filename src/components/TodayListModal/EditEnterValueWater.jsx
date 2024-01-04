import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input } from './TodayListModal.styled';

export const EditEnterValueWater = () => {
  return (
    <EnterValueWater>
      <label>
        <Typography styled="ListTitle">
          Enter the value of the whater used:
        </Typography>
        <Input
          type="number"
          name="weight"
          // max={200}
          min={250}
          step={50}
          placeholder="250"
          // onChange={handleInputChange}
        />
      </label>
    </EnterValueWater>
  );
};
