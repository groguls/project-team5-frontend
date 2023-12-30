import { styled } from 'styled-components';

export const WelcomePageContainer = styled.section`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 81px;
    padding: 80px 98px 185px 104px;
  }
`;
