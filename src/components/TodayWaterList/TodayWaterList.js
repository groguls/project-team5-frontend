import { TodayServingsList } from './TodayServingsList';
import {
  AddBtn,
  StyledPlus,
  Title,
  TodayWrapper,
} from './TodayWaterList.styled';

export const TodayWaterList = () => {
  return (
    <>
      <Title>Today</Title>
      <TodayWrapper>
        <TodayServingsList />
        <AddBtn type="button">
          <StyledPlus /> Add water
        </AddBtn>
      </TodayWrapper>
    </>
  );
};
