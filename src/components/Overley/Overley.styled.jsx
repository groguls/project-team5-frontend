import styled from 'styled-components';

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-inline: 20px;
  background-color: ${({ $isLogoModal }) =>
    $isLogoModal ? 'transparent' : '#000000cc'};

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1025px) {
    padding-inline: 32px;
  }
`;
