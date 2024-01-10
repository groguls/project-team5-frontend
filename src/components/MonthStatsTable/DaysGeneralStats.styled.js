import { styled } from 'styled-components';

export const ModalContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalContentItem = styled.li`
  color: ${props => props.theme.colors.primaryBlack};
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.text};
`;

export const ModalDate = styled.p`
  color: ${props => props.theme.colors.primaryBlue};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.text};
`;

export const ContentItemDetails = styled.span`
  margin-left: 6px;
  color: ${props => props.theme.colors.primaryBlue};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.listTitle};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.mainTitle};
`;
