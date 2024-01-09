import styled from 'styled-components';

export const PreviousDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 52px;
  margin-bottom: 24px;
  padding: 8px 24px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: ${props => `${props.theme.colors.secondaryGray}`};
  border-radius: ${props => `${props.theme.radii.normal}`};
`;

export const GlassBox = styled.div`
  width: 36px;
  height: 36px;
`;

export const ValueWater = styled.div`
  margin-right: 16px;
  margin-left: 12px;
`;

export const Time = styled.div`
  color: ${props => `${props.theme.colors.primaryBlack}`};
`;

export const Article = styled.article`
  margin-bottom: 12px;
`;

export const Amounter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const EditWaterValue = styled.div`
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
export const Select = styled.select`
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
  cursor: pointer;

  &:focus {
    outline: none;
    color: ${props => `${props.theme.colors.primaryBlue}`};
  }
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
  cursor: pointer;

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

export const FormStyles = styled.form``;

export const SaveBtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
`;

export const SavedLabel = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
  padding: 10px 30px 10px 0;
  border: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnBox = styled.div`
  margin: 0px;
`;

//Delete Water
export const DeleteCaption = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: 500;
  line-height: ${props => `${props.theme.lineHeights.listTitle}`};
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const CancelBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  width: 232px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: ${props => `${props.theme.colors.secondaryGrayBlue}`};
  cursor: pointer;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  text-align: center;
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-weight: 500;
  line-height: ${props => `${props.theme.lineHeights.text}`};

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  padding: 8px 30px;
  width: 232px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: ${props => `${props.theme.colors.secondaryRed}`};
  box-shadow: ${props => `${props.theme.shadows.normalButton}`};
  cursor: pointer;
  color: ${props => `${props.theme.colors.primaryWhite}`};
  text-align: center;
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-weight: 500;
  line-height: ${props => `${props.theme.lineHeights.text}`};

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;
