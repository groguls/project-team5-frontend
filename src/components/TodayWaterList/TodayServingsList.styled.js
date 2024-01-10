import { styled } from 'styled-components';

export const TodayList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 16px 26px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => `${props.theme.colors.secondaryBlue}`};
    max-height: 100px;
  }
  &::-webkit-scrollbar-track {
    height: 204px;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    gap: 16px 34px;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 538px;
    gap: 16px 22px;
  }
`;
