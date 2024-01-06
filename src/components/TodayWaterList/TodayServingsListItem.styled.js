
import { styled } from 'styled-components';
import { GlassOfWater } from '../Icons/GlassOfWater';

export const TodayItem = styled.li`
  width: 264px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${props => `${props.theme.colors.secondaryBlue}`};
  gap: 16px;
  @media screen and (min-width: 768px) {
    width: 646px;
    height: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }
`;

export const WaterVolume = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  line-height: 24px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;

export const TimeServing = styled.p`
  /* display: flex;
  flex-direction: row; */
  font-size: 12px;
  line-height: 24px;
  color: ${props => `${props.theme.colors.primaryBlack}`};
`;

export const TodayData = styled.div`
  display: flex;
  gap: 12px;
`;

export const TodayIcons = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledGlassOfWater = styled(GlassOfWater)`
  width: 26px;
  height: 26px;
  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;


  }
`;