import styled from 'styled-components';

export const LogOutCaption = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: 500;
  line-height: ${props => `${props.theme.lineHeights.listTitle}`};
  margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;

  /* @media screen and (min-width: 321px) {
    flex-direction: row;
    justify-content: end;
  } */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: start;
  }
`;

export const CancelButton = styled.button`
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

export const LogoutButton = styled.button`
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
