import styled from 'styled-components';
import { keyframes } from 'styled-components';

const waveAnimation = keyframes`
        0% {
          background-position: 200px 10px;
        }
        50% {
          background-position: 100px -20px;
        }
        100% {
          background-position: 0px -40px;
        }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: calc(50% - 5vh);
  left: calc(50% - 20vw);
  width: 40vw;
  height: 10vh;
  opacity: 0.95;
  div {
    margin: auto;
    width: 40vw;
    height: 20vh;
    div {
      font-size: 3vmax;
      font-weight: 700;

      text-align: center;
      line-height: 90px;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2),
        0px 2px 0px rgba(255, 255, 255, 0.3);

      background-image: -webkit-radial-gradient(
        center 10px,
        80px 100px,
        #111111 50%,
        #0099ff 51%
      );

      background-size: 30px 180px;

      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation-name: ${waveAnimation};
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
`;

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;