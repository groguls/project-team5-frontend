import { useState, useEffect } from 'react';
import Typography from 'components/Typography/Typography';
import { RecordingTime, Select, Article } from './AddWaterModal.styled';

export const AddWaterTime = ({ setDateValue }) => {
  const currentDate = new Date();
  const formattedHour = currentDate.getHours().toString();
  const formattedMin = currentDate.getMinutes().toString().padStart(2, '0');
  const currentTime = `${formattedHour}:${formattedMin}`;

  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    setDateValue(currentTime);
  }, [setDateValue, currentTime]);

  const handleTimeChange = e => {
    const value = e.target.value;
    setSelectedTime(value);
    setDateValue(value);
  };

  const options = [];

  options.push(
    <option key={currentTime} value={currentTime}>
      {currentTime}
    </option>
  );

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 5) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMin = min.toString().padStart(2, '0');
      const time = `${formattedHour}:${formattedMin}`;

      if (time !== currentTime) {
        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }
  }
  console.log(selectedTime);
  return (
    <RecordingTime>
      <Article>
        <Typography styled="Text">Recording time:</Typography>
      </Article>
      <Select value={selectedTime} onChange={handleTimeChange}>
        {options}
      </Select>
    </RecordingTime>
  );
};
