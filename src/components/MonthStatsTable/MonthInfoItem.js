import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectMonthInfo } from '../../redux/selectors';
import { DaysGeneralStats } from './DaysGeneralStats';
import { ModalDaysGeneralStats } from './ModalDaysGeneralStats';
import { useSelector } from 'react-redux';
import { selectMonthInfo } from '../../redux/selectors';

// const monthInfo = [
//   {
//     entries: 6,
//     date: '2023-12-01',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-02',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-03',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-04',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-05',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-06',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-07',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-08',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-09',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
//   {
//     entries: 6,
//     date: '2023-12-10',
//     dailyWaterRate: '1.8 L',
//     percentage: '51%',
//   },
// ];
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
      <li onClick={handleLiClick}>
        <p>{dayNumber}</p>
        <p> {percentage}</p>
      </li>

      {isModalOpen && (
        <ModalDaysGeneralStats isClose={toggleModal} open={isModalOpen}>
          <DaysGeneralStats selectedDay={selectedDay} isClose={toggleModal} />
        </ModalDaysGeneralStats>
      )}
    </div>
  );
};
