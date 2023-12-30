import { WaterConsumptionTracker } from 'components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WelcomePageContainer } from './WelcomePage.styled';
import { MainContainer } from '../HomePage/HomePage.styled';

export default function WelcomePage() {
  return (
    <MainContainer $page="welcome">
      <WelcomePageContainer>
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </WelcomePageContainer>
    </MainContainer>
  );
}
