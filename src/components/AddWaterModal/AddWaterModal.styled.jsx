import styled from 'styled-components';

export const SaveBtnBox = styled.div`
  display: flex;
`;

export const Amounter = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
export const AddWaterValue = styled.input`
  width: 92px;
  height: 36px;
  margin: 0 10px;
  background-color: ${props => `${props.theme.colors.secondaryGrayBlue}`};
  border: transparent;
  border-radius: ${props => `${props.theme.radii.medium}`};
`;

export const RecordingTime = styled.div`
  display: block;
  margin-bottom: 24px;
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
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  margin: auto;
  padding: 16px 16px 16px 16px;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 0;
  }

  &:focus,
  &:hover {
    border-radius: 4px;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    /* width: 56px; */
    font-size: 18px;
    line-height: 1.33;
  }
`;
