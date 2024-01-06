import { styled } from 'styled-components';

export const DailyNormaContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid ${props => `${props.theme.colors.secondaryGray}`};
  box-shadow: 0px 4px 8px 0px #9ebbff1f;
  background-color: ${props => `${props.theme.colors.primaryWhite}`};

  p {
    color: ${props => `${props.theme.colors.primaryBlack}`};
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const DailyNormaContainerStats = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
  letter-spacing: 0em;
  text-align: left;

  span {
    color: ${props => `${props.theme.colors.primaryBlue}`};
    font-size: 24px;
    font-weight: ${props => `${props.theme.fontWeights.regular}`};
    line-height: 24px;
  }

  button {
    background: transparent;
    border: none;
    color: ${props => `${props.theme.colors.secondaryBlue}`};
    font-size: ${props => `${props.theme.fontSizes.text}`};
    font-weight: ${props => `${props.theme.fontWeights.regular}`};
    line-height: 20px;
    cursor: pointer;
    transition: color 0.2s linear;

    &:is(:hover, :focus) {
      color: ${props => `${props.theme.colors.primaryBlue}`};
      outline: none;
    }
  }
`;
