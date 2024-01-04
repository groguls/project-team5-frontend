import styled from 'styled-components';

export const PreviousDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 254px;
  height: 52px;
  margin-bottom: 24px;
  padding: 8px 24px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: ${props => `${props.theme.colors.secondaryGray}`};
  border-radius: ${props => `${props.theme.radii.normal}`};
`;

export const ValueWater = styled.div`
  margin-right: 16px;
  margin-left: 12px;
`;

export const Time = styled.div`
  color: ${props => `${props.theme.colors.primaryBlack}`};
`;

export const Amounter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const EditWaterValue = styled.input`
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

export const SavedLabel = styled.p`
  padding: 10px 30px 10px 0;
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;
export const SaveBtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ListTitle = styled.h3`
  margin-bottom: 16px;
`;

export const Text = styled.p`
  margin-bottom: 12px;
`;
