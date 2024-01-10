import { useEffect, useRef } from 'react';
import { format, parseISO } from 'date-fns';
import {
  Modal,
  ContentItemDetails,
  ModalContentItem,
  ModalContentList,
  ModalDate,
} from 'components/MonthStatsTable/DayStatisticModal.styled';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors';

export const DayStatisticModal = ({ selectedDay, dayBlockRef }) => {
  const { date, percentage, entries } = selectedDay;
  const dailyNorma = useSelector(selectDailyNorma);

  const modalRef = useRef(null);

  const handleModalPosition = (dayBlockElement, modalElement) => {
    const dayBlockRect = dayBlockElement.getBoundingClientRect();
    const modalRect = modalElement.getBoundingClientRect();

    if (window.innerWidth < 768) {
      modalElement.style.left = '50%';
      modalElement.style.transform = 'translate(-50%, -105%)';
    } else if (dayBlockRect.left >= modalRect.width) {
      modalElement.style.left = `${dayBlockRect.left - modalRect.width}px`;
    } else if (window.innerWidth - dayBlockRect.right >= modalRect.width) {
      modalElement.style.left = `${dayBlockRect.right}px`;
    }
  };

  useEffect(() => {
    const dayBlockElement = dayBlockRef.current;
    const modalElement = modalRef.current;

    if (dayBlockElement && modalElement) {
      handleModalPosition(dayBlockElement, modalElement);
    }
  }, [dayBlockRef]);

  return (
    <Modal ref={modalRef}>
      <ModalContentList>
        <ModalContentItem>
          <ModalDate>{format(parseISO(date), 'd, MMMM')}</ModalDate>
        </ModalContentItem>
        <ModalContentItem>
          Daily norma:
          <ContentItemDetails>{dailyNorma + ' L'}</ContentItemDetails>
        </ModalContentItem>
        <ModalContentItem>
          Fulfillment of the daily norm:
          <ContentItemDetails>{percentage || 0}</ContentItemDetails>
        </ModalContentItem>
        <ModalContentItem>
          How many servings of water:
          <ContentItemDetails>{entries || 0}</ContentItemDetails>
        </ModalContentItem>
      </ModalContentList>
    </Modal>
  );
};
