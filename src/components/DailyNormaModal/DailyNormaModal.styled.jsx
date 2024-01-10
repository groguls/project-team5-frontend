import styled from 'styled-components';

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  margin-bottom: 12px;

  p {
    font-size: ${props => `${props.theme.fontSizes.text}`};
    line-height: ${props => `${props.theme.lineHeights.text}`};
  }
  span {
    color: ${props => `${props.theme.colors.primaryBlue}`};
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    line-height: 1.33;
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ExplanationContainer = styled.p`
  padding: 10px;
  margin-bottom: 24px;
  color: #8f8f8f;
  border-radius: 10px;
  border: 1px solid ${props => `${props.theme.colors.secondaryGray}`};
  font-size: 12px;
  line-height: 1.33;

  span {
    color: ${props => `${props.theme.colors.primaryBlue}`};
  }
`;

export const ArticleCalculateWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  h3 {
    color: ${props => `${props.theme.colors.primaryBlack}`};
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    font-weight: 500;
    line-height: ${props => `${props.theme.lineHeights.listTitle}`};
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: ${props => `${props.theme.fontSizes.text}`};
    line-height: ${props => `${props.theme.lineHeights.text}`};
    color: ${props => `${props.theme.colors.primaryBlack}`};
  }
`;

export const Genders = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  label {
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  input:checked {
    fill: ${props => `${props.theme.colors.primaryBlue}`};
  }
`;

export const PAmountOfWater = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    display: block;
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    font-weight: ${props => `${props.theme.fontWeights.bold}`};
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => `${props.theme.colors.primaryBlue}`};
  }
`;

export const FormStyles = styled.form`
  label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => `${props.theme.colors.primaryBlack}`};
  }

  @media screen and (min-width: 768px) {
    button {
      margin-left: auto;
    }
  }
`;

export const BtnSave = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${props => `${props.theme.colors.primaryWhite}`};
  text-align: center;
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
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
  }
`;

export const CalculateInput = styled.input`
  padding: 12px 10px;

  border: 1px solid ${props => `${props.theme.colors.secondaryGrayBlue}`};
  border-radius: 6px;

  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-weight: ${props => `${props.theme.fontWeights.regular}`};
  line-height: ${props => `${props.theme.lineHeights.text}`};
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: none;
    color: ${props => `${props.theme.colors.primaryBlue}`};
  }
`;

export const ValidationError = styled.p`
  color: ${props => `${props.theme.colors.secondaryRed}`};
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
`;
