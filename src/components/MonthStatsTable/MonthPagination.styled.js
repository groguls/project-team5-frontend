import { styled } from 'styled-components';

export const WrapperTitle = styled.div`
  width: 280px;
  height: 30px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  vertical-align: baseline;
  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 32px;
    padding: 0;
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
  margin-right: 12px; /* Adjust this value based on your design */

  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }
`;

export const WrapperPagination = styled.div`
  display: flex;
  gap: 12px;
`;

export const ButtonCurrentMonth = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  background-color: transparent;
  border: none;
`;

export const ButtonArrow = styled.button`
  background-color: transparent;
  border: none;
`;

export const MonthButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
