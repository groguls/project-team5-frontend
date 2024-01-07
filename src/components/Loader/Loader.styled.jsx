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

export const SignInLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(236, 242, 255, 0.3);
  backdrop-filter: blur(3px);
`;
