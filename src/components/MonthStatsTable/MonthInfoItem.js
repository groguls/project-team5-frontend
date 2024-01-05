import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectMonthInfo } from '../../redux/selectors';
import { DaysGeneralStats } from './DaysGeneralStats';
import { ModalDaysGeneralStats } from './ModalDaysGeneralStats';
import { useSelector } from 'react-redux';
import { selectMonthInfo } from '../../redux/selectors';
import { DayNumber, DayItem, DayPercent } from './MonthInfoItem.styled';

export const MonthInfoItem = ({ day }) => {
  const monthInfo = useSelector(selectMonthInfo);
  const { date, percentage } = day;
  const dayNumber = new Date(date).getDate();
  //   const monthInfo = useSelector(selectMonthInfo);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(state => !state);
    if (!isModalOpen) {
      const selectDay = monthInfo.find(day => day.date === date);
      setSelectedDay(selectDay);
    } else {
      setSelectedDay(null);
    }
  };

  const handleLiClick = () => {
    toggleModal();
  };
  return (
    <div>
      <DayItem onClick={handleLiClick}>
        <DayNumber $daypercent={percentage}>{dayNumber}</DayNumber>
        <DayPercent> {percentage}</DayPercent>
      </DayItem>

      {isModalOpen && (
        <ModalDaysGeneralStats isClose={toggleModal} open={isModalOpen}>
          <DaysGeneralStats selectedDay={selectedDay} isClose={toggleModal} />
        </ModalDaysGeneralStats>
      )}
    </div>
  );
};
