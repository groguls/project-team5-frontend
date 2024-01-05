import Typography from 'components/Typography/Typography';
import { RecordingTime } from './AddWaterModal.styled';

export const AddWaterTime = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  return (
    <RecordingTime>
      <Typography styled="Text">Recording time:</Typography>
      <select>
        <option>
          {hour}:{min}
        </option>
      </select>
    </RecordingTime>
  );
};
