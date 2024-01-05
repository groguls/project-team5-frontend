import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { selectTimeOfPortion } from '../../redux/selectors';
import { updateTimeInfo } from '../../redux/water/waterSlice';
import Typography from 'components/Typography/Typography';
import { RecordingTime, Select } from './AddWaterModal.styled';

export const AddWaterTime = () => {
  // const date = useSelector(selectTimeOfPortion);
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState('');

  const currentDate = new Date();
  const hour = currentDate.getHours().toString();
  const min = currentDate.getMinutes().toString().padStart(2, '0');

  const handleTimeChange = e => {
    setSelectedTime(e.target.value);
    dispatch(updateTimeInfo(e.target.value));
  };

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
  console.log('AddWaterTime  options:', typeof options);

  return (
    <RecordingTime>
      <Typography styled="Text">Recording time:</Typography>
      <Select value={selectedTime} onChange={handleTimeChange}>
        <option>
          {hour}:{min}
        </option>
        {options}
      </Select>
    </RecordingTime>
  );
};
