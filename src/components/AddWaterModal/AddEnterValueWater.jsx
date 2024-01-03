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
          min={50}
          step={50}
          placeholder="50"
          // onChange={handleInputChange}
        />
      </label>
    </EnterValueWater>
  );
};
