import { Plus } from '../Icons/Plus/Plus';
import { styled } from 'styled-components';

export const TodayWrapper = styled.div`
  width: 264px;
  height: 258px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  flex-wrap: nowrap;
  font-weight: 500;
  line-height: 30px;
  color: ${props => `${props.theme.colors.primaryBlack}`};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }
`;

export const AddBtn = styled.button`
  width: 114px;
  height: 24px;
  display: flex;
  justify-content: start;
  align-items: end;
  margin-top: 16px;
  background-color: transparent;
  border: none;
  color: ${props => `${props.theme.colors.primaryBlue}`};
`;

export const StyledPlus = styled(Plus)`
  width: 16px;
  height: 16px;
  margin: 0;
  margin-right: 8px;
  font-size: 18px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Overflow = styled.div`
  width: 264px;
  height: 212px;
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
    height: 220px;
  }
`;
