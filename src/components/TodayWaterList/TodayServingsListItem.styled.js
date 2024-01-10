import { styled } from 'styled-components';
import { GlassOfWater } from '../Icons/GlassOfWater';

export const TodayItem = styled.li`
  width: 254px;
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  width: 60px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;

export const TimeServing = styled.p`
  /* display: flex;
  flex-direction: row; */
  font-size: 12px;
  line-height: 24px;
  font-weight: ${props => props.theme.fontWeights.regular};
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

// Delete Water
export const DeleteWaterContainer = styled.div`
  width: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding-bottom: 2px;

  &:hover {
    padding-bottom: 1px;
    border-bottom: solid 1px #ef5050;
  }
`;

// Edit water
export const EditWaterContainer = styled.div`
  width: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding-bottom: 2px;

  &:hover {
    padding-bottom: 1px;
    border-bottom: solid 1px #ef5050;
  }
`;
