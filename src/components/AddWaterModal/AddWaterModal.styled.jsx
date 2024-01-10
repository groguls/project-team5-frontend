import { GlassOfWater } from 'components/Icons/GlassOfWater';
import styled from 'styled-components';

export const Amounter = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const AmountWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AmountLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TimeLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddWaterValue = styled.div`
  width: 92px;
  height: 36px;
  padding: 10px 10px;
  text-align: center;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: ${props => `${props.theme.colors.secondaryGrayBlue}`};
  border: transparent;
  border-radius: ${props => `${props.theme.radii.medium}`};
  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.bold}`};
  line-height: ${props => `${props.theme.lineHeights.info}`};
`;

export const EnterLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 44px;
  height: 44px;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  border: ${props => `${props.theme.border.secondary}`};
  border-radius: ${props => `${props.theme.radii.round}`};
`;

export const SubmitBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
  }
`;

export const InfoLabel = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
  border: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.bold}`};
  line-height: ${props => `${props.theme.lineHeights.info}`};
`;

export const SubmitBtn = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${props => `${props.theme.colors.primaryWhite}`};
  text-align: center;
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-style: normal;
  font-weight: 500;
  line-height: ${props => `${props.theme.lineHeights.text}`};
  border: none;
  background: ${props => `${props.theme.colors.primaryBlue}`};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 160px;
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    line-height: ${props => `${props.theme.lineHeights.info}`};
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PreviousDataBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 256px;
  height: 52px;
  padding: 8px 24px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: ${props => `${props.theme.colors.secondaryGray}`};
  border-radius: ${props => `${props.theme.radii.normal}`};

  @media screen and (min-width: 768px) {
    width: 254px;
  }
`;

export const StyledGlassOfWater = styled(GlassOfWater)`
  width: 36px;
  height: 36px;
`;

export const RecordWraper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

export const ValueWater = styled.div`
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.regular}`};
  line-height: ${props => `${props.theme.lineHeights.info}`};
`;

export const Time = styled.div`
  font-size: ${props => `${props.theme.fontSizes.info}`};
  font-weight: ${props => `${props.theme.fontWeights.regular}`};
  line-height: 2;
  color: ${props => `${props.theme.colors.primaryBlack}`};
`;
