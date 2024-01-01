import styled from 'styled-components';

export const SaveBtnBox = styled.div`
  display: flex;
`;

export const PreviousDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 254px;
  height: 52px;
  margin: auto;
  margin-bottom: 24px;
  padding: 8px 24px;
  background-color: ${props => `${props.theme.colors.secondaryGray}`};
  border-radius: ${props => `${props.theme.radii.normal}`};
`;

export const AmountOfWater = styled.div`
  display: block;
  margin-bottom: 24px;
`;

export const EditWaterValue = styled.input`
  width: 92px;
  height: 36px;
  margin: 0 10px;
  background-color: ${props => `${props.theme.colors.secondaryGray}`};
  border: transparent;
  border-radius: ${props => `${props.theme.radii.normal}`};
`;

export const RecordingTime = styled.div`
  display: block;
  margin-bottom: 24px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;

export const EnterValueWater = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  border: ${props => `${props.theme.border.secondary}`};
  border-radius: ${props => `${props.theme.radii.round}`};
`;
