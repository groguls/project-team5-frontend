import { styled } from 'styled-components';

export const WhyDrinkWaterContainer = styled.div`
  margin-top: 40px;
  max-width: 280px;
  background: ${props => props.theme.colors.secondaryGray};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 16px 24px 16px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    max-width: 494px;
    margin-top: 60px;
    padding: 32px 24px 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 34px;
    height: 332px;
  }

  h3 {
    margin-bottom: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      display: flex;
      align-items: center;
      ::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: ${props => props.theme.colors.primaryBlue};
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
`;
