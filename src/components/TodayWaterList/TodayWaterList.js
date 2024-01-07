// import { Overflow } from './TodayWaterList.styled';
import { TodayServingsList } from './TodayServingsList';
import {
  AddBtn,
  Overflow,
  StyledPlus,
  Title,
  TodayWrapper,
} from './TodayWaterList.styled';

export const TodayWaterList = () => {
  return (
    <>
      <TodayWrapper>
        <Title>Today</Title>
        <Overflow>
          <TodayServingsList />
          <AddBtn type="button">
            <StyledPlus /> Add water
          </AddBtn>
        </Overflow>
      </TodayWrapper>
    </>
  );
};
