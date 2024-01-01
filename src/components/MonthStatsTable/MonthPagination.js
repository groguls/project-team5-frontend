import { useState } from 'react';

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
  const currentDate = new Date();
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());

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
    return monthNames[currMonth] + ' ' + currYear; // Add a space between month and year
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
    <div>
      <h3>Month</h3>
      <div>
        <button type="button" onClick={previousMonth}>
          {'<'}
        </button>
        <button type="button">{showcurr()}</button>
        <button
          type="button"
          onClick={nextMonth}
          disabled={isNextMonthDisabled()}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
