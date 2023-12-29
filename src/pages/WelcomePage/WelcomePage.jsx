import { WaterConsumptionTracker } from 'components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WelcomePageContainer } from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <WelcomePageContainer $page="welcome">
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </WelcomePageContainer>
  );
}
