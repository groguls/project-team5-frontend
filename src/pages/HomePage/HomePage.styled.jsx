import { styled } from 'styled-components';
import { background } from './background';

const handleBackgroundBottle = (size, page = 'home', retina = false) => {
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
    width: 1440px;
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

export const SectionDailyNorma = styled.section`
  display: flex;
  flex-direction: column;
  gap: 232px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 326px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    gap: 466px;
  }
`;

export const SectionTodayCalendar = styled.section`
  max-width: 280px;
  height: 836px;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 24px; */
  box-shadow: 0px 4px 14px 0px #407bff4d;
  border-radius: 10px;
  background: ${props => `${props.theme.colors.secondaryGray}`};

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 688px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 592px;
    height: 680px;
  }
`;
