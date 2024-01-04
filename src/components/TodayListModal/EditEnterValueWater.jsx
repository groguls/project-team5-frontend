import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input, Text } from './TodayListModal.styled';

export const EditEnterValueWater = () => {
  return (
    <EnterValueWater>
      <label>
        <Typography styled="ListTitle">
          <Text>Enter the value of the whater used:</Text>
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
