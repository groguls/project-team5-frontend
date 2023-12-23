import styled from 'styled-components';

export const ContainerRedirect = styled.div`
  color: ${props => `${props.theme.colors.primaryBlue}`};
  width: 54px;
  height: 24px;
  padding: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  a {
    padding: 0;
    line-height: 1.33;
    text-transform: capitalize;
    letter-spacing: -0.2px;
    &:hover {
      color: ${props => `${props.theme.colors.secondaryOrange}`};
    }
  }
`;
