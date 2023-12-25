import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding-top: 16px;
  }

  @media (min-width: 1440px) {
    padding-top: 12px;
  }
`;

export const UserLogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  & :nth-child(2) {
    margin-left: 8px;
  }

  & :nth-child(3) {
    margin-left: 4px;
  }

  &:hover > *,
  &:focus-within > * {
    color: ${props => `${props.theme.colors.secondaryOrange}`};
  }
`;

export const UserName = styled.p``;

export const Button = styled.button`
  width: 50px;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 56px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
