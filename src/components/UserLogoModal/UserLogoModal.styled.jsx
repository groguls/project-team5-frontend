import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) visibility 250ms
    cubic-bezier(0.4, 0, 0.2, 1);
  cursor: auto;
`;

export const Modal = styled.div`
  width: 118px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => `${props.theme.shadows.userModal}`};
  transition: all;
  position: absolute;
  top: 48px;
  right: 0%;

  @media screen and (min-width: 768px) {
    top: 56px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-weight: ${props => `${props.theme.fontWeights.regular}`};
  line-height: ${props => `${props.theme.lineHeights.text}`};
  border: none;
  border-radius: 10px;
  margin: auto;
  padding: 16px;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 0;
  }

  &:focus,
  &:hover {
    border-radius: 10px;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    /* width: 56px; */
    font-size: ${props => `${props.theme.fontSizes.listTitle}`};
    line-height: 1.33;
  }
`;

export const IconBox = styled.div`
  margin-right: 8px;
`;
