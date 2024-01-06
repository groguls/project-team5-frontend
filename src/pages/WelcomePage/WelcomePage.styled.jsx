import { styled } from 'styled-components';
import { background } from '../HomePage/background';

const handleBackgroundBottle = (size, page = 'welcome', retina = false) => {
  return retina
    ? background[page][size].bottleRetina
    : background[page][size].bottle;
};

export const MainContainer = styled.main`
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;
  background-image: url(${background.mobile.background}),
    url(${({ $page }) => handleBackgroundBottle('mobile', $page)});
  background-size: ${({ $page }) =>
    $page === 'welcome' ? 'cover' : 'cover, 280px 208px'};
  background-position: ${({ $page }) =>
    $page === 'welcome' ? 'bottom center' : 'top left, top 80px center'};
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${background.mobile.backgroundRetina}),
      url(${({ $page }) => handleBackgroundBottle('mobile', $page, true)});
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
    background-image: url(${background.tablet.background}),
      url(${({ $page }) => handleBackgroundBottle('tablet', $page)});
    background-size: ${({ $page }) =>
      $page === 'welcome' ? 'cover' : 'cover, 518px 386px'};
    background-position: ${({ $page }) =>
      $page === 'welcome' ? 'bottom center' : 'top left, top 16px center'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${background.tablet.backgroundRetina}),
        url(${({ $page }) => handleBackgroundBottle('tablet', $page, true)});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
    background-image: url(${background.desktop.background}),
      url(${({ $page }) => handleBackgroundBottle('desktop', $page)});
    background-size: ${({ $page }) =>
      $page === 'welcome' ? 'contain' : 'cover, 738px 548px'};
    background-position: ${({ $page }) =>
      $page === 'welcome' ? 'bottom center' : 'top left, top left 36px'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${background.desktop.backgroundRetina}),
        url(${({ $page }) => handleBackgroundBottle('desktop', $page, true)});
    }
  }
`;

export const WelcomePageContainer = styled.section`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 81px;
    margin: 0 auto;
    padding: 80px 98px 185px 104px;
  }
`;
