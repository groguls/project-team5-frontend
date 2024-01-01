import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { useSelector } from 'react-redux';
import { selectorWaterInfo } from '../../redux/selectors';
import { Plus } from 'components/Icons/Plus/Plus';

// import { TodayListModal } from 'components/TodayListModal/TodayListModal';
import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';

import {
  AddBtn,
  InputContainer,
  InputRange,
  PercentContainer,
  Today,
  WaterContainer,
} from './WaterPanel.styled';

export const WaterPanel = () => {
  const currentDayValue = useSelector(selectorWaterInfo);
  const toggleModal = useModal();

  return (
    <WaterContainer>
      <InputContainer>
        <Today>Today</Today>
        <InputRange
          type="range"
          min="0"
          max="100"
          value={currentDayValue.percent}
          disabled
        />
        <PercentContainer>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </PercentContainer>
      </InputContainer>
      <AddBtn
        // onClick={() => toggleModal(TodayListModal)}
        onClick={() => toggleModal(AddWaterModal)}
        type="button"
      >
        <Plus aria-label="add_water" />
        Add water
      </AddBtn>
    </WaterContainer>
  );
};
