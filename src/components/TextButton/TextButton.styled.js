import styled from 'styled-components';

export const TextButtonStyled = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 114px;
  height: 24px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  &:hover {
    color: ${props => `${props.theme.colors.secondaryOrange}`};
  }
  div {
    display: flex;
    flex-wrap: nowrap;
    height: inherit;
    align-items: center;
    justify-content: space-between;
    svg {
      fill: ${props => `${props.theme.colors.primaryBlue}`};
      width: 24px;
      height: 24px;
      &:hover {
        fill: ${props => `${props.theme.colors.secondaryOrange}`};
      }
    }
    p {
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;
