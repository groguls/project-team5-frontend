import { styled } from 'styled-components';

export const BackdropBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: ${props => `${props.theme.shadows.userModal}`};
  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
   visibility 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  transform: translate(0%, 70%);
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
