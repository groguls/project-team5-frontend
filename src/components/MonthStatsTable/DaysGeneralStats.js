import React from 'react';
import { ContentItemDetails, ModalContentItem, ModalContentList, ModalDate } from './DaysGeneralStats.styled';

export const DaysGeneralStats = ({ selectedDay }) => {
  const { date, percentage, entries, dailyWaterRate } = selectedDay;

  const formattedDateString = formatDateString(date);

  return (
    <ModalContentList>
      <ModalContentItem>
        <ModalDate>{formattedDateString}</ModalDate>
      </ModalContentItem>
      <ModalContentItem>
        Daily norma:
        <ContentItemDetails>{dailyWaterRate}</ContentItemDetails>
      </ModalContentItem>
      <ModalContentItem>
        Fulfillment of the daily norm:
        <ContentItemDetails>{percentage}</ContentItemDetails>
      </ModalContentItem>
      <ModalContentItem>
        How many servings of water:
        <ContentItemDetails>{entries}</ContentItemDetails>
      </ModalContentItem>
    </ModalContentList>
  );
};

const formatDateString = (date) => {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = getMonthName(formattedDate.getMonth());
  return `${day}, ${month}`;
};

const getMonthName = (monthNumber) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthNumber];
};



