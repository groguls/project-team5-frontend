import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input } from './AddWaterModal.styled';

export const AddEnterValueWater = () => {
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
          min={0}
          step={1}
          placeholder="0"
          // onChange={handleInputChange}
        />
      </label>
    </EnterValueWater>
  );
};
