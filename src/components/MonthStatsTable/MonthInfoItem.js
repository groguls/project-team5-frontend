import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMonthInfo } from '../../redux/selectors';
import { DayNumber, DayItem, DayPercent } from './MonthInfoItem.styled';
import { DayStatisticModal } from 'components/MonthStatsTable/DayStatisticModal';

export const MonthInfoItem = ({ day }) => {
  const monthInfo = useSelector(selectMonthInfo);
  const { date, percentage } = day;
  const dayNumber = new Date(date).getDate();
  const [selectedDay, setSelectedDay] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const dayBlockRef = useRef(null);

  const handleMouseOver = () => {
    const selectDay = monthInfo.find(day => day.date === date);
    setSelectedDay(selectDay);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setSelectedDay(null);
  };

  return (
    <DayItem
      ref={dayBlockRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <DayStatisticModal
          selectedDay={selectedDay}
          dayBlockRef={dayBlockRef}
        />
      )}
      <DayNumber $daypercent={percentage}>{dayNumber}</DayNumber>
      <DayPercent> {percentage}</DayPercent>
    </DayItem>
  );
};
