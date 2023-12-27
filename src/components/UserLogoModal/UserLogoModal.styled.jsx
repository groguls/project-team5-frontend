import { styled } from 'styled-components';

export const BackdropBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px 16px 0 16px;
  border: none;
  border-radius: 4px;
  box-shadow: ${props => `${props.theme.shadows.userModal}`};
  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  transform: translate(270%, 70%);
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
  padding: 0 0 16px 0;
  cursor: pointer;

  @media (min-width: 768px) {
    /* width: 56px; */
    font-size: 18px;
    line-height: 1.33;
  }
`;
