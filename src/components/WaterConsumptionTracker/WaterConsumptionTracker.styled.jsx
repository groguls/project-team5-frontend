import { styled } from 'styled-components';

export const WaterConsumptionTrackerContainer = styled.div`
  max-width: 280px;
  button {
    width: 280px;
    @media screen and (min-width: 768px) {
      width: 336px;
    }
    @media screen and (min-width: 1440px) {
      width: 324px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
  h1 {
    margin-bottom: 16px;
  }
  h2 {
    margin-bottom: 24px;
    font-weight: 400;
  }
  h3 {
    margin-bottom: 12px;
    font-weight: 500;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  svg {
    margin-right: 8px;
  }
`;

export const ListContainer = styled.ul`
  width: 248px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;
