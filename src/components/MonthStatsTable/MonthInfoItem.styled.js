import { styled } from 'styled-components';

export const DayItem = styled.li`
  width: 32px;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    height: 56px;
  }
`;

export const DayNumber = styled.p.attrs(props => ({
  $daypercent: parseInt(props.$daypercent),
}))`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => `${props.theme.colors.primaryWhite}`};
  border: ${props => {
    return props.$daypercent >= 0 && props.$daypercent <= 99
      ? `1px solid ${props.theme.colors.secondaryOrange}`
      : 'none';
  }};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => `${props.theme.colors.primaryBlack}`};

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const DayPercent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => `${props.theme.colors.secondaryBlue}`};

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
