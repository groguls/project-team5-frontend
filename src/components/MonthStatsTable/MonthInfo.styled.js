import { styled } from 'styled-components';

export const DaysList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  padding: 0 8px;
  height: 52px;
  gap: 16px 26px;

  @media screen and (min-width: 768px) {
    width: 646px;
    height: 58px;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    gap: 16px 34px;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 538px;
    height: 56px;
    gap: 16px 22px;
  }
`;
