import { TodayServingsList } from './TodayServingsList';
import {
  AddBtn,
  StyledPlus,
  Title,
  TodayWrapper,
} from './TodayWaterList.styled';

export const TodayWaterList = () => {
  return (
    <TodayWrapper>
      <Title>Today</Title>
      <TodayServingsList />
      <AddBtn type="button">
        <StyledPlus /> Add water
      </AddBtn>
    </TodayWrapper>
  );
};
