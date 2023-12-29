import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors';
import {
  DailyNormaContainer,
  DailyNormaContainerStats,
} from './DailyNorma.styled';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

export const DailyNorma = () => {
  const toggleModal = useModal();
  const dailyNorma = useSelector(selectDailyNorma) ?? 0;

  return (
    <DailyNormaContainer>
      <p>My daily norma</p>
      <DailyNormaContainerStats>
        <span>{dailyNorma / 1000} L</span>
        <button
          onClick={() => {
            toggleModal(
              <DailyNormaModal size="medium" title="My daily norma" />
            );
          }}
          type="button"
        >
          Edit
        </button>
      </DailyNormaContainerStats>
    </DailyNormaContainer>
  );
};
