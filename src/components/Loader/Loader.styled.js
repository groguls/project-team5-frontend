import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  & > div {
    width: 260px;
    height: 260px;
  }

  @media screen and (min-width: 768px) {
    & > div {
      width: 656px;
      height: 300px;
    }
  }

  @media screen and (min-width: 1440px) {
    & > div {
      width: 538px;
      height: 276px;
    }
  }
`;
