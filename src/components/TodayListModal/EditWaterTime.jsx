import Typography from 'components/Typography/Typography';
import { RecordingTime, Text } from './TodayListModal.styled';

export const EditWaterTime = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();

  return (
    <RecordingTime>
      <Typography styled="Text">
        <Text> Recording time:</Text>
      </Typography>
      <select>
        <option>
          {hour}:{min}
        </option>
      </select>
    </RecordingTime>
  );
};
