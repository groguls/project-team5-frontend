import { styled } from 'styled-components';

export const MainTitle = styled.h1`
  font: ${props => `${props.theme.fonts.body}`};
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.mainTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.bold}`};
  line-height: ${props => `${props.theme.lineHeights.mainTitle}`};
`;

export const Subtitle = styled.h2`
  font: ${props => `${props.theme.fonts.body}`};
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.subtitle}`};
  font-weight: ${props => `${props.theme.fontWeights.medium}`};
  line-height: ${props => `${props.theme.lineHeights.subtitle}`};
`;

export const ListTitle = styled.h3`
  font: ${props => `${props.theme.fonts.body}`};
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.medium}`};
  line-height: ${props => `${props.theme.lineHeights.listTitle}`};
`;

export const Text = styled.p`
  font: ${props => `${props.theme.fonts.body}`};
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: ${props => `${props.theme.fontSizes.text}`};
  font-weight: ${props => `${props.theme.fontWeights.regular}`};
  line-height: ${props => `${props.theme.lineHeights.text}`};
`;

export const Info = styled.p`
  font: ${props => `${props.theme.fonts.body}`};
  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: ${props => `${props.theme.fontSizes.listTitle}`};
  font-weight: ${props => `${props.theme.fontWeights.bold}`};
  line-height: ${props => `${props.theme.lineHeights.info}`};
`;
