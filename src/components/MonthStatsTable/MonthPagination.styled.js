import { styled } from 'styled-components';

export const WrapperTitle = styled.div`
  width: 280px;
  height: 30px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: ${props => `${props.theme.colors.primaryBlack}`};
  margin-right: 12px; /* Adjust this value based on your design */
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
  color: ${props => (props.disabled ? 'gray' : props.theme.colors.primaryBlue)};
  background-color: transparent;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
