import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthInfo } from '../../redux/water/waterOperations';
import { MonthInfoList } from './MonthInfo';
import { updateMonthInfo } from '../../redux/water/waterSlice';
import {
  ButtonArrow,
  ButtonCurrentMonth,
  Title,
  WrapperPagination,
  WrapperTitle,
} from './MonthPagination.styled';
import { CalendarArrowLeft } from 'components/Icons/CalendarArrowLeft';
import { CalendarArrowRight } from 'components/Icons/CalendarArrowRight';
import { selectWaterList } from '../../redux/selectors';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Pagination = () => {
  const dispatch = useDispatch();

  const currentDate = new Date();
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());

  const currentMonthforList = currMonth + 1; // Months are zero-indexed
  const numberOfDaysInMonth = new Date(
    currYear,
    currentMonthforList,
    0
  ).getDate();

  const daysArray = Array.from({ length: numberOfDaysInMonth }, (_, index) => {
    const day = index + 1;
    const formattedDay = day.toString().padStart(2, '0');
    return `${currYear}-${currentMonthforList
      .toString()
      .padStart(2, '0')}-${formattedDay}`;
  });

  const arrayOfObjects = daysArray.map(date => ({
    entries: null, // You can set your initial value for entries
    date: date,
    dailyWaterRate: '', // Set your initial value for dailyWaterRate
    percentage: '', // Set your initial value for percentage
  }));

  const dailyWaterList = useSelector(selectWaterList);
  useEffect(() => {
    dispatch(updateMonthInfo(arrayOfObjects));
    dispatch(
      getMonthInfo(
        `${currYear}-${currentMonthforList.toString().padStart(2, '0')}`
      )
    );
  }, [dispatch, arrayOfObjects, currentMonthforList, currYear, dailyWaterList]);

  const nextMonth = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const previousMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const showcurr = () => {
    return monthNames[currMonth] + ', ' + currYear; // Add a space between month and year
  };

  const isNextMonthDisabled = () => {
    const nextMonth = currMonth === 11 ? 0 : currMonth + 1;
    const nextYear = currMonth === 11 ? currYear + 1 : currYear;
    return (
      nextYear > currentDate.getFullYear() ||
      (nextYear === currentDate.getFullYear() &&
        nextMonth > currentDate.getMonth())
    );
  };

  return (
    <>
      <WrapperTitle>
        <Title>Month</Title>
        <WrapperPagination>
          <ButtonArrow type="button" onClick={previousMonth}>
            <CalendarArrowLeft />
          </ButtonArrow>
          <ButtonCurrentMonth type="button">{showcurr()}</ButtonCurrentMonth>
          <ButtonArrow
            type="button"
            onClick={nextMonth}
            disabled={isNextMonthDisabled()}
          >
            <CalendarArrowRight />
          </ButtonArrow>
        </WrapperPagination>
      </WrapperTitle>
      <MonthInfoList />
    </>
  );
};
