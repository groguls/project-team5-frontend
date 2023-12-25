import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  color: ${props => `${props.theme.colors.primaryBlue}`};

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  margin: auto;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    /* width: 56px; */
    font-size: 18px;
    line-height: 1.33;
  }
`;
