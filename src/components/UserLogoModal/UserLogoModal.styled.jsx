import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 100vh;
  width: 320px;

  background-color: transparent;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) visibility 250ms
    cubic-bezier(0.4, 0, 0.2, 1);




  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Modal = styled.div`
  width: 118px;

  /* transform: translate(0%, 0%); */
  z-index: 2000;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => `${props.theme.shadows.userModal}`};

  transition: all;


  position: absolute;
  top: 130%;
  left: -300%;

  @media screen and (min-width: 768px) {
    top: 56px;
    right: 54%;
  }

  @media screen and (min-width: 1440px) {
    right: 57.5%;
  }

`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  margin: auto;
  padding: 16px 16px 16px 16px;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 0;
  }

  &:focus,
  &:hover {
    border-radius: 4px;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    /* width: 56px; */
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const IconBox = styled.div`
  margin-right: 8px;
`;
