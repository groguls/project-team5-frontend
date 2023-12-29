import styled from 'styled-components';
import { modalSizes } from './modalSize';

const getSize = (size, screen) => modalSizes[screen][size];

export const DivModalBox = styled.div`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  background-color: ${props => `${props.theme.colors.primaryWhite}`};
  width: 280px;
  padding: ${({ $size }) => ($size === 'small' ? '32px 24px' : '32px 12px')};
  border-radius: 10px;

  h3 {
    color: ${props => `${props.theme.colors.primaryBlack}`};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: ${({ $size }) => getSize($size, 'md')}px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: ${({ $size }) => getSize($size, 'xl')}px;
  }
`;

export const DivTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    color: ${props => `${props.theme.colors.primaryBlack}`};
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }
`;

export const CloseModal = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
