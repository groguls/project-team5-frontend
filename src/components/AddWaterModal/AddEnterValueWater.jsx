import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input, Article } from './AddWaterModal.styled';

export const AddEnterValueWater = ({ water, setWater }) => {
  const handleChange = e => {
    let value = e.target.value;
    value = value ? Number(value).toString() : '';

    if (/^[0-9\b]*$/.test(value)) {
      setWater(Number(value));
    }
  };

  return (
    <EnterValueWater>
      <label>
        <Article>
          <Typography styled="ListTitle">
            Enter the value of the whater used:
          </Typography>
        </Article>
        <Input
          type="number"
          name="waterVolume"
          value={water}
          max={5000}
          min={1}
          step={1}
          onChange={handleChange}
        />
      </label>
    </EnterValueWater>
  );
};
