import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px; /* відстань між іконкою та текстом */
  max-width: 280px;
  border-radius: 10px;
  border: none;
  height: 44px;

  /* Зміна бекграунду кнопки */
  background-color: ${props => props.$backgroundColor || '#407BFF'};

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: ${props => props.$textColor || 'white'};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  /* Зміна ширини кнопки */
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;
