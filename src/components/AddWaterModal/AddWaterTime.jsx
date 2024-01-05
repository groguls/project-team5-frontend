import Typography from 'components/Typography/Typography';
import { RecordingTime, Select } from './AddWaterModal.styled';

export const AddWaterTime = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes().toString().padStart(2, '0');

  const options = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 5) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMin = min.toString().padStart(2, '0');

      options.push(
        <option key={`${formattedHour}:${formattedMin}`}>
          {formattedHour}:{formattedMin}
        </option>
      );
    }
  }

  return (
    <RecordingTime>
      <Typography styled="Text">Recording time:</Typography>
      <Select>
        <option>
          {hour}:{min}
        </option>
        {options}
      </Select>
    </RecordingTime>
  );
};
