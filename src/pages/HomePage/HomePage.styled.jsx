import { styled } from 'styled-components';
import { background } from './background';

const handleBackgroundBottle = (size, page = 'home', retina = false) => {
  return retina
    ? background[page][size].bottleRetina
    : background[page][size].bottle;
};

export const MainContainer = styled.main`
  margin-top: 24px;
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
      url(${({ $page }) => handleBackgroundBottle('sm', $page, true)});
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
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
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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

export const SectionDailyNorma = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SectionTodaiCalendar = styled.section`
  @media screen and (min-width: 768px) {
  }
`;
