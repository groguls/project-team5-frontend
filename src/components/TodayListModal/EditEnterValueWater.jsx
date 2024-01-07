import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input, Article } from './TodayListModal.styled';

export const EditEnterValueWater = ({ water, setWater }) => {
  const handleChange = e => {
    let value = e.target.value;
    value = value ? Number(value).toString() : '';

    if (/^[0-9\b]*$/.test(value) && value <= 5000) {
      setWater(value);
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
          placeholder="0"
          onChange={handleChange}
        />
      </label>
    </EnterValueWater>
  );
};
