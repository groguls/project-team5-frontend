import styled from 'styled-components';

export const Amounter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
export const AddWaterValue = styled.div`
  width: 92px;
  height: 36px;
  margin: 0 10px;
  padding: 10px 10px;
  text-align: center;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: ${props => `${props.theme.colors.secondaryGrayBlue}`};
  border: transparent;
  border-radius: ${props => `${props.theme.radii.medium}`};
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

export const Input = styled.input`
  padding: 12px 10px;
  width: 100%;
  border: 1px solid ${props => `${props.theme.colors.secondaryGrayBlue}`};
  border-radius: 6px;

  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: none;
    color: ${props => `${props.theme.colors.primaryBlue}`};
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  border: ${props => `${props.theme.border.secondary}`};
  border-radius: ${props => `${props.theme.radii.round}`};
`;

export const SaveBtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SavedLabel = styled.label`
  padding: 10px 30px 10px 0;
  color: ${props => `${props.theme.colors.primaryBlue}`};
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
export const FormStyles = styled.form`
  /* label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => `${props.theme.colors.primaryBlack}`};
  } */

  @media screen and (min-width: 768px) {
    button {
      margin-left: auto;
    }
  }
`;
