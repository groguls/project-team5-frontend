import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 20px 0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 16px 32px 0;
  }

  @media (min-width: 1440px) {
    padding: 12px 112px 0;
  }
`;
