import styled from 'styled-components';

import bgMob from '../../img/background/mobile/bg_signin@1x.png';
import bgMobRetina from '../../img/background/mobile/bg_signin@2x.png';
import bgBottleMob from '../../img/background/mobile/bottle_signin@1x.png';
import bgBottleMobRetina from '../../img/background/mobile/bottle_signin@2x.png';
import bgBottleTab from '../../img/background/tablet/bottle_signin@1x.png';
import bgBottleTabRetina from '../../img/background/tablet/bottle_signin@2x.png';
import bgDesk from '../../img/background/desktop/bg_signin@1x.png';
import bgDeskRetina from '../../img/background/desktop/bg_signin@2x.png';
import bgDeskBottle from '../../img/background/desktop/bottle_signin@1x.png';
import bgDeskBottleRetina from '../../img/background/desktop/bottle_signin@2x.png';

export const AuthLayoutStyles = styled.main`
  background-image: url(${bgMob}), url(${bgBottleMob});
  background-size: cover, 280px 210px;
  background-position: top, bottom 20px center;
  background-repeat: no-repeat;
  height: calc(100vh - 56px);
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina}), url(${bgBottleMobRetina});
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 64px);
    background-image: url(${bgBottleTab});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgBottleTabRetina});
      background-size: cover;
      background-position: center;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
    background-image: url(${bgDesk}), url(${bgDeskBottle});
    height: calc(100vh - 60px);
    background-size: contain, 916px 680px;
    background-position: bottom 60px left, left -40px bottom 60px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskRetina}), url(${bgDeskBottleRetina});
    }
  }
`;
