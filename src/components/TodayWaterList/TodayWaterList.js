// import { Overflow } from './TodayWaterList.styled';
import { useModal } from 'components/ModalContextProvider/ModalContextProvider';
import { TodayServingsList } from './TodayServingsList';
import {
  AddBtn,
  Overflow,
  StyledPlus,
  Title,
  TodayWrapper,
} from './TodayWaterList.styled';
import { AddWaterModal } from 'components/AddWaterModal/WaterAdd';

export const TodayWaterList = () => {
  const toggleModal = useModal();
  return (
    <>
      <TodayWrapper>
        <Title>Today</Title>
        <Overflow>
          <TodayServingsList />
          <AddBtn
            type="button"
            onClick={() =>
              toggleModal(<AddWaterModal size={'medium'} title="Add water" />)
            }
          >
            <StyledPlus /> Add water
          </AddBtn>
        </Overflow>
      </TodayWrapper>
    </>
  );
};
